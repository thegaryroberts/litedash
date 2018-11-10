import React, { SFC } from "react"
import { Link } from "react-router-dom"

interface IProps {
    url: string,
    id: string,
    name: string
}

export const GroupLink: SFC<IProps> = ({ url, id, name }) =>
    <Link to={`${url}/${id}`}>{name}</Link>
