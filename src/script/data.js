const data={
    getJournalEntries (){
        fetch("http://localhost:8088/journalEntries") 
        .then(entry=>entry.json())  
        .then(entries => {
            entries.forEach(entryy=>{
                let journalEntryy=entryComponent.makeJournalEntryComponent(entryy)
                entryComponent.renderJournalEntries(journalEntryy)
                })
            })
}
}