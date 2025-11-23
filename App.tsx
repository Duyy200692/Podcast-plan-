
import React, { useState, useEffect, useCallback } from 'react';
import { episodes } from './data';
import AudienceChart from './components/charts/AudienceChart';
import PillarChart from './components/charts/PillarChart';
import EpisodeCard from './components/EpisodeCard';
import Modal from './components/Modal';

const App: React.FC = () => {
    const [activeModalId, setActiveModalId] = useState<string | null>(null);

    const handleOpenModal = useCallback((id: string) => {
        setActiveModalId(id);
        document.body.style.overflow = 'hidden';
    }, []);

    const handleCloseModal = useCallback(() => {
        setActiveModalId(null);
        document.body.style.overflow = '';
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleCloseModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleCloseModal]);
    
    const activeEpisode = episodes.find(ep => ep.id === activeModalId);

    return (
        <>
            <div className="container mx-auto p-4 md:p-8 max-w-7xl">

                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-deep-blue mb-4">Kế Hoạch Triển Khai Podcast</h1>
                    <p className="text-xl md:text-2xl font-semibold text-brand-purple">Chuyên Gia Cà Phê Amoka International (Mr. Tuấn)</p>
                    <p className="text-lg text-gray-600 mt-2">Trực quan hóa chiến lược nội dung và sản xuất.</p>
                </header>

                <section id="strategy" className="mb-16">
                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                        <h2 className="text-3xl font-bold text-brand-deep-blue mb-6 text-center">Giai Đoạn 1: Chiến Lược (The "Why" & "Who")</h2>
                        
                        <div className="text-center mb-8 p-6 bg-brand-gold bg-opacity-10 rounded-lg">
                            <span className="text-2xl font-bold text-brand-gold">“</span>
                            <blockquote className="text-xl italic font-medium text-brand-deep-blue inline">
                                Không chỉ là kỹ thuật, đây là hành trình nâng tầm giá trị cà phê Việt Nam qua lăng kính của khoa học và nghệ thuật quốc tế.
                            </blockquote>
                            <span className="text-2xl font-bold text-brand-gold">”</span>
                            <p className="text-right text-brand-text font-semibold mt-2">- Thông Điệp Cốt Lõi -</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-12">
                            <div className="bg-brand-deep-blue text-white p-6 rounded-lg shadow-md">
                                <span className="text-5xl font-extrabold">9</span>
                                <span className="block text-xl font-semibold mt-2">Tập Nội Dung</span>
                            </div>
                            <div className="bg-brand-purple text-white p-6 rounded-lg shadow-md">
                                <span className="text-5xl font-extrabold">30-45</span>
                                <span className="block text-xl font-semibold mt-2">Phút / Tập</span>
                            </div>
                            <div className="bg-brand-coral text-white p-6 rounded-lg shadow-md">
                                <span className="text-5xl font-extrabold">1-1</span>
                                <span className="block text-xl font-semibold mt-2">Phỏng Vấn Chuyên Sâu</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-brand-deep-blue mb-4">Đối Tượng Khán Giả Mục Tiêu</h3>
                                <p className="text-gray-700 mb-4">Podcast được thiết kế để thu hút ba nhóm khán giả chính, những người có chung niềm đam mê với cà phê nhưng ở các cấp độ tìm hiểu khác nhau:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-brand-purple font-bold text-xl mr-3">●</span>
                                        <div>
                                            <strong className="text-brand-purple">Home Brewers:</strong>
                                            <span className="text-gray-600"> Người yêu cà phê muốn tìm hiểu sâu hơn để thưởng thức tại gia.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-coral font-bold text-xl mr-3">●</span>
                                        <div>
                                            <strong className="text-brand-coral">Industry Rookies:</strong>
                                            <span className="text-gray-600"> Các bạn trẻ (Barista, Roaster) muốn dấn thân vào ngành F&B chuyên nghiệp.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-gold font-bold text-xl mr-3">●</span>
                                        <div>
                                            <strong className="text-brand-gold">Agriculture Enthusiasts:</strong>
                                            <span className="text-gray-600"> Người quan tâm đến nông sản Việt Nam chất lượng cao.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <AudienceChart />
                        </div>
                    </div>
                </section>

                <section id="content" className="mb-16">
                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                        <h2 className="text-3xl font-bold text-brand-deep-blue mb-6 text-center">Giai Đoạn 2: Trụ Cột Nội Dung (The "What")</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                            <div>
                                <h3 className="text-2xl font-bold text-brand-deep-blue mb-4">Phân Bổ Nội Dung Theo 5 Trụ Cột</h3>
                                <p className="text-gray-700">9 tập của mùa đầu tiên được xây dựng có chiến lược xoay quanh 5 trụ cột nội dung chính, đảm bảo sự đa dạng và chiều sâu, từ câu chuyện cá nhân đến kiến thức chuyên môn sâu và tầm nhìn ngành.</p>
                            </div>
                           <PillarChart />
                        </div>

                        <h3 className="text-2xl font-bold text-brand-deep-blue mb-6 text-center">Danh Sách 9 Tập Chi Tiết</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {episodes.map(ep => (
                                <EpisodeCard key={ep.id} episode={ep} onCardClick={handleOpenModal} />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="production" className="mb-16">
                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                        <h2 className="text-3xl font-bold text-brand-deep-blue mb-8 text-center">Giai Đoạn 3: Quy Trình Sản Xuất (The "How-to")</h2>
                        
                        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch space-y-4 md:space-y-0 md:space-x-4">
                            <div className="flex-1 max-w-sm w-full bg-gray-50 border-l-4 border-brand-purple p-6 rounded-lg shadow-md text-center">
                                <div className="text-4xl text-brand-purple mb-3">①</div>
                                <h3 className="text-xl font-bold text-brand-deep-blue mb-2">Tiền Kỳ (Pre-Production)</h3>
                                <ul className="text-left text-gray-600 text-sm list-disc list-inside space-y-1">
                                    <li>Họp briefing chốt chủ đề.</li>
                                    <li>Xác định tone & mood.</li>
                                    <li>Chuẩn bị kịch bản, bộ câu hỏi khung (Key Questions).</li>
                                </ul>
                            </div>
                            
                            <div className="text-4xl text-brand-gold font-light transform rotate-90 md:rotate-0 self-center mx-5">&rarr;</div>

                            <div className="flex-1 max-w-sm w-full bg-gray-50 border-l-4 border-brand-coral p-6 rounded-lg shadow-md text-center">
                                <div className="text-4xl text-brand-coral mb-3">②</div>
                                <h3 className="text-xl font-bold text-brand-deep-blue mb-2">Sản Xuất (Production)</h3>
                                <ul className="text-left text-gray-600 text-sm list-disc list-inside space-y-1">
                                    <li>Thu âm tại Amoka/quán yên tĩnh.</li>
                                    <li>Setup 2 micro (Host, Khách mời).</li>
                                    <li>Quay hình (Optional) làm video/shorts.</li>
                                </ul>
                            </div>

                            <div className="text-4xl text-brand-gold font-light transform rotate-90 md:rotate-0 self-center mx-5">&rarr;</div>

                            <div className="flex-1 max-w-sm w-full bg-gray-50 border-l-4 border-brand-gold p-6 rounded-lg shadow-md text-center">
                                <div className="text-4xl text-brand-gold mb-3">③</div>
                                <h3 className="text-xl font-bold text-brand-deep-blue mb-2">Hậu Kỳ (Post-Production)</h3>
                                <ul className="text-left text-gray-600 text-sm list-disc list-inside space-y-1">
                                    <li>Edit âm thanh, khử ồn, thêm nhạc.</li>
                                    <li>Viết Show Notes (tóm tắt, thuật ngữ).</li>
                                    <li>Thiết kế Thumbnail cho từng tập.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="distribution" className="mb-12">
                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                        <h2 className="text-3xl font-bold text-brand-deep-blue mb-8 text-center">Giai Đoạn 4: Phân Phối & Lan Tỏa (Distribution)</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-gray-50 border-t-4 border-brand-deep-blue p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold text-brand-deep-blue mb-4">Kênh Phát Hành</h3>
                                <ul className="space-y-3 text-lg">
                                    <li className="flex items-center text-gray-700"><span className="text-2xl mr-3">🎧</span> Spotify</li>
                                    <li className="flex items-center text-gray-700"><span className="text-2xl mr-3">🍎</span> Apple Podcasts</li>
                                    <li className="flex items-center text-gray-700"><span className="text-2xl mr-3">▶️</span> YouTube (Video/Sóng âm)</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 border-t-4 border-brand-purple p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold text-brand-purple mb-4">Tái Sử Dụng Nội Dung</h3>
                                <ul className="space-y-3 text-lg">
                                    <li className="flex items-center text-gray-700"><span className="text-2xl mr-3">📱</span> Cắt Reels/Shorts (câu "đắt giá")</li>
                                    <li className="flex items-center text-gray-700"><span className="text-2xl mr-3">✍️</span> Chuyển thể thành Blog post</li>
                                    <li className="flex items-center text-gray-700"><span className="text-2xl mr-3">💬</span> Trích dẫn (Quotes) cho Social</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-brand-coral bg-opacity-10 border-l-4 border-brand-coral p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-brand-coral mb-3">Chiến Thuật Kết Hợp Sự Kiện</h3>
                            <p className="text-gray-700">Tung tập podcast có chủ đề liên quan để "làm nóng" không khí và cung cấp kiến thức nền cho khán giả trước khi sự kiện offline (workshop, cupping) diễn ra. <br/><strong>Ví dụ:</strong> Phát hành <strong>Tập 3 (Arabica Cầu Đất)</strong> trước Workshop ngày 22/11.</p>
                        </div>
                    </div>
                </section>

                <footer className="text-center text-sm text-gray-500 mt-12">
                    <p>Infographic được tạo bởi Canvas Infographics | 2025</p>
                </footer>
            </div>
            {activeEpisode && (
                <Modal 
                    isOpen={!!activeModalId} 
                    onClose={handleCloseModal}
                    episode={activeEpisode}
                >
                    {activeEpisode.modalContent}
                </Modal>
            )}
        </>
    );
}

export default App;
