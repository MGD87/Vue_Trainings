const app = Vue.createApp({
    // Optionen
    data: function () {
        return {
            submissions: submissions, // aus seed.js
        };
    },
    computed: {
        totalVotes() {
            return this.submissions.reduce((totalVotes, submission) => {
                return totalVotes + submission.upVotes + submission.downVotes;
            }, 0);
        },
        sortedSubmissions() {
            return this.submissions.sort((a, b) => {
                return b.upVotes - b.downVotes - (a.upVotes - a.downVotes);
            });
        },
        cardHeaderBackgroundColor() {
            if (this.totalVotes >= 50) {
                return ['bg-primary', 'text-white'];
            }
        },
        cardTitleFontSize() {
            let size;
            if (this.upVotes + this.downVotes < 95) {
                size = 94;
            } else if (this.upVotes + this.downVotes < 115) {
                size = this.upVotes + this.downVotes;
            } else {
                size = 115;
            }
            return {fontSize: size / 5 + 'px'};
        },
    },
    methods: {},

    watch: {},
});

// Globale Component
app.component('SubmissionListItem', {
    // Optionen
    props: ['submission'],
    computed: {},
    methods: {
        upvote() {
            this.submission.upVotes++;
        },
        downvote() {
            this.submission.downVotes++;
        },
    },
    template: `
    <div class="d-flex">
      <div class="d-shrink-0">
        <img v-bind:src="submission.img" alt="" />
      </div>
      <div class="flex-grow-1 ms-3">
        <table style="width: 100%">
        <th>
        <h5 >
          {{ submission.title }}
        </h5>
          <p class="text-muted">
            rating: {{ parseFloat( (submission.upVotes*100)/(submission.upVotes+submission.downVotes) ).toFixed(2) }} 
          </p>
        <div v-html="submission.desc"></div>
        <small class="text-muted"
          >Eingereicht von: {{ submission.author }}</small
        >
        </th>
        <th>
        <span
            class="float-end text-muted"
            style="cursor: pointer"
            @click="upvote()">
            {{ submission.upVotes }}
            <i class="fa fa-chevron-up"></i>
          </span>
          <br>
          <span class="float-end text-primary">
            <strong>{{ submission.upVotes - submission.downVotes }}</strong>
          </span>
          <br>
          <span
            class="float-end text-muted"
            style="cursor: pointer"
            @click="downvote()">
            {{ submission.downVotes }}
            <i class="fa fa-chevron-down"></i>
          </span>
        </th>
        </table>
      </div>
    </div>
  `,
});

// Liefert die Instanz zur Root-Component zurück
const vm = app.mount('#app');
