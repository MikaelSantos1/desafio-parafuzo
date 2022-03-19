import CircularProgress from '@mui/material/CircularProgress';
import { Container } from './styles';

export function LoadScreen({children}) {
    return (
        <Container>
            <CircularProgress />
            <p>{children}</p>
        </Container>
    )
}