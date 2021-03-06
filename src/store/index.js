import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // data in the component
  state: {
    choices: ['rock', 'paper', 'scissors'],
    computerChoice: '',
    userChoice: '',
    isUserWinner: false,
    showResult: false,
  },
  getters: {
    choices: state => state.choices,
    showResult: state => state.showResult,
    isUserWinner: state => state.isUserWinner,
  },
  // methods that changes the state
  mutations: {
    setUserChoice(state, userChoice) {
      console.log('before mutation happens', state.userChoice);
      state.userChoice = userChoice;
      console.log('after mutation happens', state.userChoice);
    },
    setComputerChoice(state, computerChoice) {
      state.computerChoice = computerChoice;
    },
    setIsUserWinner(state, choices) {
      let isUserWinner;
      if (choices.userChoice === 'rock' && choices.computerChoice === 'scissor') {
        isUserWinner = true;
      } else if (choices.userChoice === 'paper' && choices.computerChoice === 'rock') {
        isUserWinner = true;
      } else if (choices.userChoice === 'scissors' && choices.computerChoice === 'paper') {
        isUserWinner = true;
      } else if (choices.userChoice === choices.computerChoice) {
        isUserWinner = false;
      } else {
        isUserWinner = false;
      }
      // return this.isUserWinner;
      state.isUserWinner = isUserWinner;
    },
    setResult(state, bool) {
      console.log('before mutation result happens', state.showResult);
      state.showResult = bool;
      console.log('before mutation result happens', state.showResult);
    },
  },
  // methods in the component
  actions: {
    playGame({ commit, state }, userSelection) {
      commit('setResult', false);
      const computerChoice = state.choices[Math.floor(Math.random() * state.choices.length)];
      const userChoice = userSelection;

      console.log(userChoice, computerChoice, state.isUserWinner);

      commit('setUserChoice', userChoice);
      commit('setComputerChoice', computerChoice);
      commit('setIsUserWinner', { computerChoice, userChoice });

      commit('setResult', true);
    },
  },
  modules: {
  },
});
