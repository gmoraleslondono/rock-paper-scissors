<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>Choose Your option to start playing</h3>
    <form @submit.prevent="playGame">
      <radio-button
        v-for="(choice, index) in choices"
        :key="index"
        :value="choice"
        required
        name="choice"
      />
      <the-button
        type="submit"
        text="Play!"
      />
    </form>
    <result
      v-if="showResult"
      :result="isUserWinner"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import RadioButton from '@/components/RadioButton.vue';
import TheButton from '@/components/TheButton.vue';
import Result from '@/components/Result.vue';

export default {
  name: 'home',
  components: {
    RadioButton,
    TheButton,
    Result,
  },
  data() {
    return {
      choices: ['rock', 'paper', 'scissors'],
      computerChoice: '',
      userChoice: '',
      isUserWinner: false,
      showResult: false,
    };
  },
  methods: {
    playGame() {
      this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
      this.userChoice = document.querySelector('.radio:checked').value;
      console.log(this.userChoice, this.computerChoice, this.isUserWinner);
      this.checkWinner();
      this.showResult = !this.showResult;
    },
    checkWinner() {
      if (this.userChoice === 'rock' && this.computerChoice === 'scissor') {
        this.isUserWinner = true;
      } else if (this.userChoice === 'paper' && this.computerChoice === 'rock') {
        this.isUserWinner = true;
      } else if (this.userChoice === 'scissors' && this.computerChoice === 'paper') {
        this.isUserWinner = true;
      } else if (this.userChoice === this.computerChoice) {
        this.isUserWinner = false;
      } else {
        this.isUserWinner = false;
      }
      return this.isUserWinner;
    },
  },
};
</script>
