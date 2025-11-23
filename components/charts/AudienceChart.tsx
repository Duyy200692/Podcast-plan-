
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

                const audienceLabels = [
                    'Người Đam Mê & Khám Phá',
                    'Người Quan Tâm Sức Khỏe & Vận Động',
                    'Người Yêu Thiên Nhiên & Bền Vững',
                    'Người Trong Ngành & Đại Sứ Văn Hóa'
                ];

                chartInstanceRef.current = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: audienceLabels,
                        datasets: [{
                            label: 'Đối tượng khán giả',
                            data: [25, 25, 25, 25],
                            backgroundColor: [
                                '#7A5195', // brand-purple
                                '#10b981', // brand-green (emerald-500)
                                '#FFA600', // brand-gold
                                '#FF6361'  // brand-coral
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
