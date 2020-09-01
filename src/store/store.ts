import { createStore, MutationTree, /*ActionContext, ActionTree*/ } from 'vuex'

import exampleAnimation from "../assets/stickers/json/test-complex-1.json"

// Based on: https://dev.to/3vilarthas/vuex-typescript-m4j

export type Lottie = object; // TODO: lottie type???

// State definition

export const state = {
  animData: exampleAnimation,
  errorMsg: "",
  freshlyLoadedAnimData: null
};

export type State = {
  animData: Lottie;
  errorMsg: string;
  freshlyLoadedAnimData: Lottie | null;
};

// Mutation definitions

export enum MutationTypes {
  SET_ANIM_DATA = "SET_ANIM_DATA",
  PARSE_AND_SET_ANIM_DATA = "PARSE_ANIM_DATA",
  SET_LOADED_ANIM_DATA = "SET_LOADED_ANIM_DATA"
}

export type Mutations<S = State> = {
  [MutationTypes.SET_ANIM_DATA](state: S, payload: Lottie): void;
  [MutationTypes.PARSE_AND_SET_ANIM_DATA](state: S, payload: string): void;
  [MutationTypes.SET_LOADED_ANIM_DATA](state: S, payload: Lottie): void;
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ANIM_DATA](state: State, payload: Lottie) {
    state.animData = payload; // This might be bad because it overwrites child references
    state.errorMsg = "";
  },
  [MutationTypes.PARSE_AND_SET_ANIM_DATA](state: State, payload: string) {
    try {
      state.animData = JSON.parse(payload); // This might be bad because it overwrites child references
      state.errorMsg = "";
    } catch (e) {
      state.errorMsg = e.toString();
    }
  },
  [MutationTypes.SET_LOADED_ANIM_DATA](state: State, payload: Lottie) {
    state.freshlyLoadedAnimData = payload;
  }
};

// Create store

export default createStore({
  state,
  mutations,
  // actions,
  modules: {
  }
});
