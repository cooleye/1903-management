import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';

class BizCharts extends Component {
    state = {
        data : [
            { genre: 'Sports', sold: 275, income: 2300 },
            { genre: 'Strategy', sold: 115, income: 667 },
            { genre: 'Action', sold: 120, income: 982 },
            { genre: 'Shooter', sold: 350, income: 5271 },
            { genre: 'Other', sold: 150, income: 3710 }
          ],
        cols : {
            sold: { alias: '销售量' },
            genre: { alias: '游戏种类' }
        },
        data2 : [
            {
              year: "2001",
              population: 41.8
            },
            {
              year: "2002",
              population: 38
            },
            {
              year: "2003",
              population: 33.7
            },
            {
              year: "2004",
              population: 30.7
            },
            {
              year: "2005",
              population: 25.8
            },
            {
              year: "2006",
              population: 31.7
            },
            {
              year: "2007",
              population: 33
            },
            {
              year: "2008",
              population: 46
            },
            {
              year: "2009",
              population: 38.3
            },
            {
              year: "2010",
              population: 28
            },
            {
              year: "2011",
              population: 42.5
            },
            {
              year: "2012",
              population: 30.3
            }
          ]
    }
    render() {
        return (
            <div>
                <Chart width={600} height={400} data={this.state.data} scale={this.state.cols}>
                    <Axis name="genre" title/>
                    <Axis name="sold" title/>
                    <Legend position="top" dy={-20} />
                    <Tooltip />
                    <Geom type="interval" position="genre*sold" color="genre" />
                </Chart>

                <Chart height={window.innerHeight} data={this.state.data2} padding="auto" forceFit>
                <Coord type="polar" />
                <Tooltip />
                <Legend
                  position="right"
                  offsetY={-window.innerHeight / 2 + 180}
                  offsetX={-160}
                />
                <Geom
                  type="interval"
                  color="year"
                  position="year*population"
                  style={{
                    lineWidth: 1,
                    stroke: "#fff"
                  }}
                />
              </Chart>
            </div>
        );
    }
}

export default BizCharts;
