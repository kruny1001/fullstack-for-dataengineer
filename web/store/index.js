import axios from "~/plugins/axios"
import firebase from 'firebase'
import { database, storage } from '~/plugins/fbConn'
// https://github.com/james2doyle/nuxt-firebase-auth

export const state = () => ({
  // users: [{ id: 0, login: "Kevin" }]
  // ids: [],
  items: [],
  quizs: []
})

export const mutations = {
  // setUsers(state, users) {
  //   state.users = users
  // }
  // setIds(state, ids) {
  //     state.ids = ids
  //   },
  setItems(state, items) {
    state.items = items
  },
  addQuiz(state, quiz) {
    state.quizs.push(quiz) 
  },
  setQuizs(state, quizs){
    state.quizs = quizs
  }
}

export const actions = {

  // async nuxtServerInit({ commit }) {
  //   const response = await axios.get("users")
  //   const users = response.data
  //   console.log("api called")
  //   commit("setUsers", users) // calling mutation methods
  // }

  // async nuxtServerInit({ commit }) {
  //     const response = await axios.get("topstories.json")
  //     const ids = response.data
  //     const tenIds = ids.slice(0, 10)

  //     const itemsPromises = tenIds.map(id => axios.get(`item/${id}.json`))
  //     const itemsResponses = await Promise.all(itemsPromises)
  //     const items = itemsResponses.map(res => res.data)

  //     // commit("setIds", ids)
  //     commit("setItems", items)
  // },

  async CREATE_QUIZ({commit}, object) {
    const dataRef = database.ref('quizs')
    dataRef.push(object)
    commit("addQuiz", object)
  },

  async LOAD_QUIZS({commit}, dataUrl) {
    database.ref('quizs').on('value', snap => {
      var quizs = []
      snap.forEach(function (snapshot) {
        var obj = snapshot.val();
        obj.id = snapshot.key
        quizs.push(obj)
      })
      commit("setQuizs", quizs)
    })
  },
  async LOAD_ITEMS({commit}, dataUrl) {
    /*
      /ask -> askstories.json
    */

    const response = await axios.get(dataUrl)
    const ids = response.data
    const tenIds = ids.slice(0, 10)

    const itemsPromises = tenIds.map(id => axios.get(`item/${id}.json`))
    const itemsResponses = await Promise.all(itemsPromises)
    const items = itemsResponses.map(res => res.data)

    const realItems = items.map(
      item =>
      item ?
      item :
      {
        title: "Failed to load",
        id: 0
      }
    )
    commit("setItems", realItems)
  }
}
