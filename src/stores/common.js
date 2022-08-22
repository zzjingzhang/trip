import { defineStore } from 'pinia'

const useCommon = defineStore('common', {
  state: () => ({
    primaryColor: '#ff9854',
  })

})
export default useCommon
