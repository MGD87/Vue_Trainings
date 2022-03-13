//Zuerst muss die vue-root instance erzeugt werden

//Konfiguration der Root Component
const app = Vue.createApp({
    //optionen
    data: function () {
        return {
            submissions: submissions, //aus seed.js
            //totalVotes: 0,
        };
    },
    computed: {
        totalVotes() {
            console.log('computed property ausgeführt.');
            return this.submissions.reduce((totalVotes, submission) => {
                console.log(totalVotes + submission.votes);
                return totalVotes + submission.votes;
            }, 0);
        },
        sortedSubmissions() {
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes;
            });
        },
        cardHeaderBackgroundColor() {
            if (this.totalVotes >= 70) {
                return ['bg-primary', 'text-white'];
            }
            // Alternativ: return { 'bg-primary text-white': this.totalVotes >= 70,};
        },
        cardTitleFontSize() {
            return {fontSize: this.totalVotes / 5 + 'px'};
        },
    },
    methods: {
        /*upvote: function () {}, */
        // KEINE Arrow Functions verwenden this ist ungebunden
        /* upvote: () => { console.log(this);},*/
        /*downvote(submissionId) {
            const submission = this.submissions.find(
                (submission) => submission.id === submissionId,
            );
            submission.votes++;
            submission.downVotes++;
            submission.voteCalc--;
            return submission;
        },
        upvote(submissionId) {
            const submission = this.submissions.find(
                (submission) => submission.id === submissionId,
            );
            submission.votes++;
            submission.upVotes++;
            submission.voteCalc++;
            return submission;
        } */
        /*,
        logConsole(text) {
            console.log(text);
        }*/
    },
    watch: {
        /*submissions(newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
        },*/
        /*submissions: {
            //Langform von der oberen Schreibweise
            handler(newValue, oldValue) {
                this.totalVotes = this.submissions.reduce(
                    (totalVotes, submission) => {
                        return totalVotes + submission.votes;
                    },
                    0,
                );
            },
            deep: true, //Standardwert ist bei false
            immediate: true, //Standardwert ist bei false - sorgt dafür, dass der Watcher beim initialen Laden ausgeführt wird
        },
        // Check mit console: vm.$data.totalVotes = 42
        totalVotes(newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
        },*/
    },
});
//Definiert an welches Element des DOMs sich gebunden werden soll
//Liefert die Instanz zur Root-Component zurück
const vm = app.mount('#app');
