import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import fs from 'fs';
import path from 'path';
import db from '../database/knex';
import dotenv from 'dotenv';
dotenv.config();


export const createEmail = async (req: Request, res: Response) => {
    try {
        const { nome, email } = req.body;


        const newEmail = await db('mailing_list')
            .insert({
                nome: nome,
                email: email,
            })
            .returning('*');

        res.status(201).json(newEmail[0]);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro inesperado' });
    }
};


export const sendMassEmail = async (
    req: Request,
    res: Response
): Promise<Response | void> => {
    try {
        const recipients = await db('mailing_list').select('nome', 'email');

        if (recipients.length === 0) {
            return res.status(404).json({ message: 'Nenhum email encontrado.' });
        }

        const transporter = nodemailer.createTransport(
            new SMTPTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER as string,
                    pass: process.env.EMAIL_PASS as string,
                },
            })
        );
        const templatePath = path.join(__dirname, '../utils/templateMailing.html');
        let emailTemplate = fs.readFileSync(templatePath, 'utf8');

        const sendPromises = recipients.map(({ nome, email }) => {
            const personalizedHtml = emailTemplate.replace('{{nome}}', nome);

            return transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Proposta de Trabalho Freelancer',
                html: personalizedHtml,
            });
        });

        await Promise.all(sendPromises);
        return res.status(200).json({ message: 'Emails enviados com sucesso!' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao enviar emails' });
    }
};
