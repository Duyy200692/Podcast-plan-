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

                // Full labels for tooltips to preserve information
                const pillarLabelsFull = [
                    'Người Truyền Lửa (2 tập)',
                    'Farm to Cup (2 tập)',
                    'Rang Xay - Roasting (2 tập)',
                    'Cảm Quan - Sensory (2 tập)',
                    'Tầm Nhìn - Future (1 tập)',
                    'Khoa Học & Thể Thao (1 tập)',
                ];

                // Shorter labels for the legend to prevent overlapping
                const pillarLabelsShort = [
                    'Người Truyền Lửa (2)',
                    'Farm to Cup (2)',
                    'Rang Xay (2)',
                    'Cảm Quan (2)',
                    'Tầm Nhìn (1)',
                    'Khoa Học & Thể Thao (1)',
                ];

                chartInstanceRef.current = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: pillarLabelsShort, // Use short labels for display
                        datasets: [{
                            label: 'Số tập',
                            data: [2, 2, 2, 2, 1, 1],
                            backgroundColor: [
                                '#003F5C',
                                '#7A5195',
                                '#BC5090',
                                '#FF6361',
                                '#FFA600',
                                '#10b981' // emerald-500
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
                                        // On hover, show the full, descriptive label
                                        const dataIndex = tooltipItems[0].dataIndex;
                                        return pillarLabelsFull[dataIndex] || '';
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
