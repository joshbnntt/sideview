'use strict'

const Env = use('Env')
const Config = use('Config')
const Mail = use('Mail')

class ContactController {
    * contact (request, response) {
        const contactData = request.all()
        try {
            yield Mail.send('emails.contact', contactData, (message) => {
                message.to(Env.get('MY_EMAIL'))
                message.from(contactData.email, contactData.name)
                message.subject(`Website Contact - ${contactData.name}`)
            })
        }
        catch(e) {
            response.status(500).send(e)
        }
    }
}

module.exports = ContactController
