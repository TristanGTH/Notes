const options = {
    data(){
        return {
            note : '',
            allNote: [{
                id: Date.now(),
                content: ''
            }],
            stringLimit : 30
        }
    },
    methods :{
        addNote(){
            this.tempNote = this.note
            const note = {
                id: Date.now(),
                content: this.tempNote,

            }
            this.allNote.push(note)
            localStorage.setItem("allNote", JSON.stringify(this.allNote))
        },
        displayNote(id){
            const temp = document.getElementById(id)
            if (temp.style.display !== 'block'){
                temp.style.display = 'block'
            }
            else {
                temp.style.display = 'none'
            }
        },
        updateNote(){
            localStorage.setItem("allNote", JSON.stringify(this.allNote))
        },
        deleteNote(id){
            console.log('oui')
            this.allNote = this.allNote.filter((note)=>{
                return id !== note.id;
            })
            localStorage.setItem("allNote", JSON.stringify(this.allNote))

        }
    },
    mounted() {
        this.allNote = JSON.parse(localStorage.getItem('allNote')) || []

    }
}



Vue.createApp(options).mount('#app')