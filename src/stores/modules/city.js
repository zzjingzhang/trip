import { defineStore } from 'pinia'
import { getCityAll } from '@/services'

const useCity = defineStore('city', {
  state: () => {
    return {
      allCities: {},
      currentCity: {
        cityName: '深圳'
      }

    }

  },
  actions: {
    async fetchCityAll () {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }

})

export default useCity
