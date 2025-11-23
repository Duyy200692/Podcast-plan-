
import React, { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const AudienceChart: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                // Destroy previous chart instance if it exists
                if (chartInstanceRef.current) {
                    chartInstanceRef.current.destroy();
                }

                const audienceLabels = ['Home Brewers', 'Industry Rookies', 'Agriculture Enthusiasts'];

                chartInstanceRef.current = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: audienceLabels,
                        datasets: [{
                            label: 'Đối tượng khán giả',
                            data: [33.3, 33.3, 33.3],
                            backgroundColor: [
                                '#7A5195', // brand-purple
                                '#FF6361', // brand-coral
                                '#FFA600'  // brand-gold
                            ],
                            borderColor: '#F8F9FA',
                            borderWidth: 3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    font: {
                                        size: 12,
                                        family: 'Inter, sans-serif'
                                    }
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    title: function(tooltipItems) {
                                        return tooltipItems[0].label;
                                    }
                                }
                            }
                        }
                    } as ChartOptions<'doughnut'>,
                });
            }
        }

        // Cleanup function to destroy chart on component unmount
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="chart-container">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default AudienceChart;
