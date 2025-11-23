
import React, { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const PillarChart: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                if (chartInstanceRef.current) {
                    chartInstanceRef.current.destroy();
                }

                const wrapLabels = (label: string, maxWidth: number) => {
                    const words = label.split(' ');
                    let lines: string[] = [];
                    let currentLine = '';
                    words.forEach(word => {
                        if ((currentLine + ' ' + word).trim().length > maxWidth) {
                            lines.push(currentLine.trim());
                            currentLine = word;
                        } else {
                            currentLine = (currentLine + ' ' + word).trim();
                        }
                    });
                    lines.push(currentLine.trim());
                    return lines;
                };

                const pillarLabelsRaw = [
                    'Người Truyền Lửa (2 tập)',
                    'Farm to Cup (2 tập)',
                    'Rang Xay - Roasting (2 tập)',
                    'Cảm Quan - Sensory (2 tập)',
                    'Tầm Nhìn - Future (1 tập)'
                ];
                const pillarLabels = pillarLabelsRaw.map(l => wrapLabels(l, 16));

                chartInstanceRef.current = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: pillarLabels,
                        datasets: [{
                            label: 'Số tập',
                            data: [2, 2, 2, 2, 1],
                            backgroundColor: [
                                '#003F5C',
                                '#7A5195',
                                '#BC5090',
                                '#FF6361',
                                '#FFA600'
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
                                        const label = tooltipItems[0].label;
                                        if (Array.isArray(label)) {
                                          return label.join(' ');
                                        }
                                        return label;
                                    }
                                }
                            }
                        }
                    } as ChartOptions<'doughnut'>,
                });
            }
        }

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

export default PillarChart;
