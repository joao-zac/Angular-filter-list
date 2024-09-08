import { IUser } from "../interfaces/user";
import { IFilterform } from "../interfaces/filterform";

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);

    return filteredList;
}

const filterUsersList = (filterOptions: IFilterform, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);

    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

    return filteredList;
}

export { filterUsersList };
