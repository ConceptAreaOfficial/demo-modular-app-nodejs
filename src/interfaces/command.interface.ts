interface ICommand<TCommandPayload extends IPayload> extends IModule{
    type: string;
    handler: (payload: TCommandPayload | null) => any;
}