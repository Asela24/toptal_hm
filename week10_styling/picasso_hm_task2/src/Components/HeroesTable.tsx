import { Container, Table, Typography } from '@toptal/picasso';
import data from '../db'
import { Hero } from './Layout';

export const HeroesTable = ({ heroesList }: { heroesList: Hero[] }) => {
    return (
        <Container bordered rounded top='medium' padded='medium'>
            <Typography variant='heading' size='xlarge' color='black'>Heroes</Typography>
            <Table variant='striped' >
                <Table.Head>
                    <Table.Row>
                        <Table.Cell>Name</Table.Cell>
                        <Table.Cell>Hero</Table.Cell>
                        <Table.Cell>Cape</Table.Cell>
                        <Table.Cell>Universe</Table.Cell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {heroesList.map(row => (
                        <Table.Row key={`${row.id}`}>
                            <Table.Cell>{row.name}</Table.Cell>
                            <Table.Cell>{row.hero}</Table.Cell>
                            <Table.Cell>{row.cape}</Table.Cell>
                            <Table.Cell>{row.universe}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.Cell colSpan={3}>Total</Table.Cell> 
                        <Table.Cell>{data.length}</Table.Cell>   
                    </Table.Row> 
                </Table.Footer>

            </Table>
        </Container>
    )
}