import { ContactPreview } from "./ContactPreview"
import '../assets/scss/components/ContactList.scss'

export function ContactList({ contacts }) {

    function onRefreshPage() {
        window.location.reload(false);
    }

    return (
        <section className='contact-list'>
            <h1>Contacts:</h1>
            <section className="list simple-cards-grid text-center">
                {contacts.map(contact =>
                    <ContactPreview key={contact._id} contact={contact}/>
                )}
            </section>
            <button onClick={onRefreshPage}>Back</button>
        </section>
    )
}