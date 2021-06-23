import { useEffect, useState } from 'react';
import { Jumbotron, Table, Container, Row, Col } from 'react-bootstrap';
import useStatsContext from '../../context/StatsContext';

const GeneralStats = () => {
  const { totalStats, altura, peso, maxStats } = useStatsContext();

  useEffect(() => {
    maxStats(totalStats);
  }, [totalStats]);

  return (
      <Col md={8} lg={9} className="mx-auto py-2">
      <Jumbotron>
          <Table striped bordered hover variant="dark">
            <tbody>
              <tr>
                <td>intelligence {totalStats.intelligence} </td>
                <td>Strength {totalStats.strength}</td>
              </tr>
              <tr>
                <td>Speed {totalStats.speed}</td>
                <td>Weight {peso} kg</td>
              </tr>
              <tr>
                <td>Durability {totalStats.durability}</td>
                <td>Combat {totalStats.combat}</td>
              </tr>
              <tr>
                <td>Power {totalStats.power}</td>
                <td>Height {altura} cm</td>
              </tr>
              <tr>
                <td colSpan="4">Main category {maxStats(totalStats)}</td>
              </tr>
            </tbody>
          </Table>
      </Jumbotron>
      </Col>
  );
};

export default GeneralStats;
