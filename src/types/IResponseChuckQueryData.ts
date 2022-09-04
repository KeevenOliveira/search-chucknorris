import IChuckData from './IChuckData';

export default interface IResponseChuckQueryData {
    total: number;
    result: IChuckData[] | [];
}
