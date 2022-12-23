import logo from "./logo.svg";
import "./App.css";
import TourCard from "./component/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={5} marginTop='1rem'>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
