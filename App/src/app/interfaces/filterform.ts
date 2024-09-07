export interface IFilterform{
    name: string,
    date: {
        start: Date | undefined,
        end: Date | undefined
    },
    status: boolean | undefined
}