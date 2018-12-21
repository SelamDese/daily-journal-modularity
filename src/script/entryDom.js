const entryDom={
    journalBuilder(){
const journalEntryForm=`<section>
         <h1> Daily journal </h1>
    <form>
        <fieldset>
             <label for = 'journalDate'>Date of entry</label>
             <input type = 'date' name = 'journalDate' id = 'journalDate'>
        </fieldset>
        <fieldset>
             <label for = 'journalDate'>Concepts covered</label>
             <input type = 'text' name = 'journalDate' id = 'journalDate'>
        </fieldset>
        <fieldset>
             <label for='journalDate'>Journal entry</label>
             <textarea id='journalDate' name='journalDate'></textarea>
        </fieldset>
        <fieldset>
             <label for='journalDate'>Mood of the day</label>
             <select id='journalDate' name='journalDate'>
                 <option value='H'>Happy</option>
                 <option value='F'>Fine</option>
                 <option value='S'>Sad</option>
             </select>
        </fieldset>
    <button type = 'button' name = 'journalDate' id = 'journalDate'>Record journal entry</button>
    </form>
</section>`
const journalSection=document.querySelector('#journal-section')
journalSection.innerHTML=journalEntryForm
    }
}