document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
      reviews: [
                { text: "Vue.js is so cool."
                  rating: 8,
                  reviewer: Mimi
              },
                { text: "You're so functional, Vue.js." 
                  rating: 9
                  reviewer: Mike
              },
                { text: "I miss Angular."
                  rating: 6
                  reviewer: Tash
              }

                ],
    newReview: ''
    },
    methods: {
      addReview: function() {
        if (this.newReviewText !== '' && this.newReviewRating !== '' && this.newReviewRating !== '') {
        var reviewObj = {
                          text: this.newReviewText,
                          rating: this.newReviewRating,
                          reviewer: this.newReviewReviwer
                        }:
        this.reviews.push(reviewObj);
        this.newReviewText = '';
        this.newReviewRating = '';
        this.newReviewReviwer = '';
      }
    },
      isPositive: function(inputReview) {
        return inputReview.indexOf('stupid') === -1
      }
    }
  });
});