import axios from 'axios';
import configuration from '../config';
import AddProductCommand from '../modules/ProductModule/commands/AddProductCommand';
import GetAllProductsQuery from '../modules/ProductModule/queries/GetAllProductsQuery';
import AddUserCommand from '../modules/UserModule/commands/AddUserCommand';
import GetUserByIDQuery from '../modules/UserModule/queries/GetUserByIDQuery';
import GetProductsForTheUserCommand from '../modules/ProductModule/queries/GetProductsForTheUserQuery';


type RouteHandlers = {
    [type: string]: {
        moduleName: string,
        handler: (payload: IPayload | null) => any
    };
};

const commands: ICommand<any>[] = [
    new AddProductCommand,
    new GetAllProductsQuery,
    new AddUserCommand,
    new GetUserByIDQuery,
    new GetProductsForTheUserCommand
];

class Mediator {
    private handlers: RouteHandlers;

    constructor(private commands: ICommand<IPayload>[]) {
        this.handlers = {};
    }

    async send(command: ICommand<any>, payload: IPayload | null){      
        console.log("Received command - " + command.type);
        if(this.handlers[command.type]){
            const moduleName: string = this.handlers[command.type].moduleName; 
            console.log("For received command " + command.type + " handler module: " + moduleName);
                        
            switch(configuration[moduleName].protocol)  {
                case "INTERNAL":
                    console.log(moduleName + " accessability configured as in process. Message will be handled by current instance");
                    
                    return this.handlers[command.type].handler(payload);
                case "HTTP":
                    console.log(moduleName + " accessability configured as HTTP protocol with address " + configuration[moduleName].address);
                    console.log(`Message will be send to the following address ${configuration[moduleName].address}/crossmodulecommunication?type=${command.type}`);
                    
                    if(!payload){
                        payload = {}
                    }      
                    const response = await axios.post(`${configuration[moduleName].address}/crossmodulecommunication?type=${command.type}`, payload);
                    
                    return response.data;
                default:
                    return new Error(`Not available protocol!`);
            }   
            // Or other protocols
        } else {
            console.log("For received command " + command.type + " handler was not found!");            
            return new Error(`No handler registered for ${command.type}`);
        }
    }

    registerCommands() {
        this.commands.forEach(command => {
            this.handlers[command.type] = {
                moduleName: command.moduleName,
                handler: command.handler
            };
        });       
    }

    getCommandByType(type: string): ICommand<IPayload> | undefined {
        return this.commands.find(command => command.type == type);
    }
}

export default new Mediator(commands);
