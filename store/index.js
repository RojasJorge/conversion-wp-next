import { createStore, action } from "easy-peasy";

export default createStore({
  config: {
    lid: 0 /** Landing ID */,
    gtcode: null /** Google tag manager code */,

    /**
     * Update state
     */
    updateConfig: action((state, payload) => {
      this.lid = payload.page_on_front
      this.gtcode = payload.google_tag_manager_code
    })
  }
})