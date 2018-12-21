const entryComponent={
    makeJournalEntryComponent(journalEntry) {
        //journalEntryStringTemplate=''
        let journalEntryStringTemplate=
        `<section>
            <h3>${journalEntry.concept}</h3>
            <p>${journalEntry.date}</p>
            <p>${journalEntry.entry}</p>
            <p>${journalEntry.mood}</p>
        </section>`
        return journalEntryStringTemplate
    },
    renderJournalEntries(Entries) {
        const journalSection = document.querySelector('#journal-section')
        journalSection.innerHTML += Entries
    }
}