
export interface IGroupOption {
    name: string,
    rating: number
}

export interface IGroup {
    id: string,
    options: IGroupOption
}

const fetchAll = () => fetch("./data/data.json")
    .then((response) => response.json())
    .then(({ groups }) => {

        if (!groups) {
            return []
        }

        return groups as IGroup[]
    })

const fetchById = (id: string) => fetchAll()
    .then((groups) => {

        const newGroup = (groups as IGroup[]).find((x) => x.id === id)

        if (!newGroup) {
            return null
        }

        return newGroup as IGroup | null
    })

export const fetchGroups = {
    byId: fetchById,
    getAll: fetchAll,
}
