export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbze0gpCV8SyV4zT4vNTcs5bKyM-zm_Oc5AsMc2xwD7Y8J5aTZuCpMUSE-cEoYLbe6aD/exec', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req.body)
            });

            // Verificar se a resposta é JSON
            // let data;
            // try {
            //     data = await response.json();
            // } catch (jsonError) {
            //     console.error('Resposta não JSON recebida:', jsonError);
            //     return res.status(500).json({ error: 'Resposta inválida do Google Apps Script' });
            // }

            res.status(200).json({"Message": "Escreveu na planilha!"});
        } catch (error) {
            console.error('Erro ao comunicar com o Google Apps Script:', error);
            res.status(500).json({ error: 'Erro ao comunicar com o Google Apps Script' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}
