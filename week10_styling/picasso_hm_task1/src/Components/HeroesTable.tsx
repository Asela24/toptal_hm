import { Container, Table, Typography } from '@toptal/picasso';
import data from '../db'
export const HeroesTable = () => {
    return (
        <Container bordered rounded top='small' padded='medium'>
            <Typography variant='heading' size='large' color='black'>Heroes</Typography>
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
                    {data.map(row => (
                        <Table.Row id={`${row.id}`}>
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