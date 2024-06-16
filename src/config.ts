import configFile from './app.config.json';

interface IModuleConfig {
    protocol: string;
    address: string | null
}

interface IConfig {
    [moduleName: string]: IModuleConfig
}

const productModuleConfig: IModuleConfig = process.env.PRODUCT_MODULE ? JSON.parse(process.env.PRODUCT_MODULE) : configFile.ProductModule;
const userModuleConfig: IModuleConfig = process.env.USER_MODULE ? JSON.parse(process.env.USER_MODULE) : configFile.UserModule;


const configuration: IConfig =  {
    ProductModule: {
        protocol: productModuleConfig.protocol,
        address: productModuleConfig.address
    }, 
    UserModule: {
        protocol: userModuleConfig.protocol,
        address: userModuleConfig.address
    }
}

export default configuration;