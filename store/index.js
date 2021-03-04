import { createStore, action, thunk, persist, computed } from "easy-peasy";

export default createStore({
  global: persist({
    landing: null /** Landing object */,

    /**
     * Update state
     */
    updateLanding: action((state, payload) => {
      state.landing = payload
    }),

    /**
     * Render markup from html string
     */
    createMarkup: computed(() => content => {
      return {
        __html: content
      }
    })
  }),
  apartments: persist({
    list: [],
    current: 1,
    updateApartments: action((state, payload) => {
      state.list = payload
    }),
    updateCurrent: action((state, payload) => {
      state.current = payload
    })
  }),
  amenities: persist({
    list: [],
    updateAmenities: action((state, payload) => {
      state.list = payload
    })
  }),
  finishes: persist({
    list: [],
    updateFinishes: action((state, payload) => {
      state.list = payload
    })
  })
})