import axios from "axios";
import { IAxiosGroup } from "./axios"

interface IAppSettings{
    readonly axiosGroup : IAxiosGroup,
}

class AppSettings implements IAppSettings{
    axiosGroup: IAxiosGroup;
    constructor(){
        this.axiosGroup = this.setupAxios();
    }

    private setupAxios(): IAxiosGroup {
        const defaultConfig = {
          headers: {
            'content-type': 'application/json',
          },
        }
        const postAxios = axios.create({
            ...defaultConfig,
            baseURL : "https://not-yet"
        });
        return { postAxios }
    }
}

export default new AppSettings()