const client = require("@sendgrid/mail");
const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL, SENDGRID_FROM_EMAIL } =
    process.env;

const replaceLineBreaks = (message) => {
    return message.replace(/\n/g, "<br/>");
};

exports.handler = async function (event, context, callback) {
    const { message, subject, senderEmail, senderName } = JSON.parse(
        event.body
    );
    client.setApiKey(SENDGRID_API_KEY);

    const data = {
        to: SENDGRID_TO_EMAIL,
        from: SENDGRID_FROM_EMAIL,
        subject: `New message from ${senderName} (${senderEmail}) about ${subject}`,
        html: ` <b>Name:</b> ${senderName} <br/> <br/>
                <b>Email:</b> ${senderEmail} <br/> <br/>
                <b>Subject:</b> ${subject} <br/> <br/>
                <b>Message:</b> <br/>
                ${replaceLineBreaks(message)}`,
    };

    try {
        await client.send(data);
        return {
            statusCode: 200,
            body: JSON.stringify({ msg: "Message sent" }),
        };
    } catch (err) {
        return {
            statusCode: err.code,
            body: JSON.stringify({ msg: err.message }),
        };
    }
};
