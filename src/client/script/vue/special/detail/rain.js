import Chart from 'chart.js';

export default function(ctx) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
            datasets: [
                {
                    data: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                    ],
                    backgroundColor: 'rgb(62, 123, 212, 0.5)',
                    borderColor: 'rgb(62, 123, 212, 1)',
                    borderWidth: 2,
                },
            ],
        },
        options: {
            elements: { point: { radius: 0 } },
            legend: {
                display: false,
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                    },
                },
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            color: 'rgb(62, 123, 212, 0.1)',
                        },
                        ticks: {
                            fontColor: 'rgb(62, 123, 212, 1)',
                        },
                        type: 'time',
                        time: {
                            unit: 'hour',
                            unitStepSize: 2,
                            displayFormats: {
                                hour: 'HH[h]',
                            },
                        },
                    },
                ],
                yAxes: [
                    {
                        gridLines: {
                            zeroLineColor: 'rgb(62, 123, 212, 0.1)',
                            color: 'rgb(62, 123, 212, 0.1)',
                        },
                        ticks: {
                            fontColor: 'rgb(62, 123, 212, 1)',
                            suggestedMin: 20,
                            suggestedMax: 40,
                        },
                    },
                ],
            },
        },
    });
}
