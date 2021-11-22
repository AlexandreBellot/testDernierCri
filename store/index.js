/*****  Paramètre DU FLUX  *****/

const BASEURL = new URL('https://api.nasa.gov/planetary/apod')
const NBDAY = 10
const APIKEY = 'R9cjF4fzdCXvTyOcdTSLdjUyRef476JJHOg7S3EG'

/***** */

export const state = () => ({
  data: [],
  inPageItem: false,
  parallaxInstance: false,
})


export const mutations = {
  setData (state,info) {
    state.data = info
  },
  setPageItem (state,bool) {
    state.inPageItem = bool
  },
  setParallaxComponant (state,instance) {
    state.parallaxInstance = instance
  }
}

export const getters = {
    getParallaxComponant: (state) => state.parallaxInstance,
    getPageItem: (state) => state.inPageItem,
    getData: (state) => state.data,
    getUrl: () => {
      return param => {
        const theDate = new Date()
        const startDate = new Date(theDate.getTime() - NBDAY*86400000).toISOString().substr(0,10);
        const today = theDate.toISOString().substr(0,10);

        const urlParams = {
            api_key: APIKEY,
            start_date: (param) ? param : startDate, 
            end_date: (param) ? param : today
        }
        BASEURL.search = new URLSearchParams(urlParams).toString();
        return `${BASEURL}`
      }
    }
}
