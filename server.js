require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const path = require('path');

const app = express();

app.use(cors({ origin: 'https://industriasdosvientos.com' }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/api/contact', async (req, res) => {
    const { name, phone, email, address, productType, measurements, quantity, message } = req.body;

    if (!name || !phone || !email || !message) {
        return res.status(400).json({ error: 'Faltan campos requeridos.' });
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'web@industriasdosvientos.com',
            to: 'pedidos@industriasdosvientos.com',
            replyTo: email,
            subject: `Nueva solicitud de presupuesto - ${name}`,
            html: `
                <h2>Nueva solicitud de presupuesto</h2>
                <table style="border-collapse:collapse;width:100%">
                    <tr><td style="padding:8px;border:1px solid #ddd"><strong>Nombre</strong></td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd"><strong>Teléfono</strong></td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd"><strong>Dirección</strong></td><td style="padding:8px;border:1px solid #ddd">${address || 'No especificada'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd"><strong>Producto</strong></td><td style="padding:8px;border:1px solid #ddd">${productType || 'No especificado'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd"><strong>Medidas</strong></td><td style="padding:8px;border:1px solid #ddd">${measurements || 'No especificadas'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd"><strong>Cantidad</strong></td><td style="padding:8px;border:1px solid #ddd">${quantity || 'No especificada'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd"><strong>Mensaje</strong></td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>
                </table>
            `
        });

        res.json({ success: true });
    } catch (error) {
        console.error('Error al enviar email:', error);
        res.status(500).json({ error: 'Error al enviar el mensaje. Inténtalo de nuevo.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado en puerto ${PORT}`));
