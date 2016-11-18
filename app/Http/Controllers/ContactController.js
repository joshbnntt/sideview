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
                message.subject(`Website Contact - ${contactData.name}`)
            })
            response.status(200).send('success')
        }
        catch(e) {
            console.log(e)
            response.status(500).send(e)
        }
    }
}

module.exports = ContactController
