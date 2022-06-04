import { AxiosInstance } from 'axios'
import appSettings from './setup'

export interface IAxiosGroup {
  postAxios: AxiosInstance
}

export default appSettings.axiosGroup.postAxios
