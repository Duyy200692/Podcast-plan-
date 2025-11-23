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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-deep-blue mb-4">Kế Hoạch Triển Khai Podcast & Workshop</h1>
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
                                <span className="text-5xl font-extrabold">10</span>
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
                                <p className="text-gray-700 mb-4">Dựa trên các buổi workshop, podcast được mở rộng để phục vụ 4 nhóm khán giả đa dạng, mỗi nhóm có một mối quan tâm riêng nhưng cùng chung tình yêu với cà phê Việt:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-brand-purple font-bold text-xl mr-3">●</span>
                                        <div>
                                            <strong className="text-brand-purple">Người Đam Mê & Khám Phá:</strong>
                                            <span className="text-gray-600"> Gồm các "Home Brewers" và người yêu nông sản, họ muốn tìm hiểu sâu về hương vị và câu chuyện đằng sau hạt cà phê.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 font-bold text-xl mr-3">●</span>
                                        <div>
                                            <strong className="text-emerald-600">Người Quan Tâm Sức Khỏe & Vận Động:</strong>
                                            <span className="text-gray-600"> Gồm các vận động viên, người tập gym và chuyên gia y tế, tìm đến cà phê như một công cụ hỗ trợ hiệu suất.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-gold font-bold text-xl mr-3">●</span>
                                        <div>
                                            <strong className="text-brand-gold">Người Yêu Thiên Nhiên & Bền Vững:</strong>
                                            <span className="text-gray-600"> Quan tâm đến quy trình canh tác hữu cơ, lối sống gần gũi thiên nhiên và sự phát triển bền vững của vùng trồng.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-coral font-bold text-xl mr-3">●</span>
                                        <div>
                                            <strong className="text-brand-coral">Người Trong Ngành & Đại Sứ Văn Hóa:</strong>
                                            <span className="text-gray-600"> Từ Barista trẻ đến những người có khát vọng đưa đặc sản Việt ra thế giới, xem cà phê là sự nghiệp và niềm tự hào dân tộc.</span>
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
                                <h3 className="text-2xl font-bold text-brand-deep-blue mb-4">Phân Bổ Nội Dung Theo 6 Trụ Cột</h3>
                                <p className="text-gray-700">10 tập của mùa đầu tiên được xây dựng có chiến lược xoay quanh 5 trụ cột nội dung chính và 1 tập đặc biệt, đảm bảo sự đa dạng và chiều sâu, từ câu chuyện cá nhân đến kiến thức chuyên môn sâu và tầm nhìn ngành.</p>
                            </div>
                           <PillarChart />
                        </div>

                        <h3 className="text-2xl font-bold text-brand-deep-blue mb-6 text-center">Danh Sách 10 Tập Chi Tiết</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {episodes.map(ep => (
                                <EpisodeCard key={ep.id} episode={ep} onCardClick={handleOpenModal} />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="experience" className="mb-16">
                    <div className="bg-brand-deep-blue rounded-lg shadow-xl p-8 md:p-12 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-brand-purple rounded-full opacity-10"></div>
                        <div className="absolute bottom-0 left-0 -mb-24 -ml-12 w-72 h-72 bg-brand-coral rounded-full opacity-10"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-gold mb-3 text-center">Trải Nghiệm Độc Quyền</h2>
                            <p className="text-xl font-semibold text-white mb-8 text-center">Hành Trình "Farm to Cup" Tại Nông Trại Amoka</p>
                            
                            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                                Một chuyến đi trọn vẹn để bạn hóa thân thành người nông dân, tự tay hái những trái cà phê chín mọng, tham gia vào quy trình sơ chế và thưởng thức cà phê tươi ngon nhất ngay tại vườn.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-5xl mx-auto">
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl pt-1">🌱</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-brand-gold">Hái Cà Phê Chín</h4>
                                        <p className="text-gray-300 text-sm mt-1">Tự tay thu hoạch những trái cà phê đỏ mọng, chín ngọt dưới sự hướng dẫn của người nông dân.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl pt-1">⚙️</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-brand-gold">Tìm Hiểu Sơ Chế</h4>
                                        <p className="text-gray-300 text-sm mt-1">Khám phá bí mật đằng sau các phương pháp sơ chế ướt, khô, mật ong và cách chúng tạo ra hương vị đa dạng.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl pt-1">☕</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-brand-gold">Thưởng Thức Tại Vườn</h4>
                                        <p className="text-gray-300 text-sm mt-1">Nếm thử những ly cà phê tươi ngon nhất, được pha chế ngay tại nơi chúng được sinh ra.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl pt-1">🍽️</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-brand-gold">Ẩm Thực Địa Phương</h4>
                                        <p className="text-gray-300 text-sm mt-1">Thưởng thức bữa ăn tối ấm cúng với những đặc sản của vùng cao nguyên trong không khí trong lành.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl pt-1">⛺</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-brand-gold">Cắm Trại Qua Đêm</h4>
                                        <p className="text-gray-300 text-sm mt-1">Đắm mình trong không gian yên tĩnh của núi rừng, quây quần bên lửa trại và ngắm bầu trời đầy sao.</p>
                                    </div>
                                </div>
                            </div>
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
                            <h3 className="text-2xl font-bold text-brand-coral mb-2">Lộ Trình Sự Kiện Offline</h3>
                            <p className="text-brand-deep-blue font-semibold mb-6">Đồng hành tổ chức bởi <span className="font-bold">revital coffee</span></p>

                            <div className="space-y-6">
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-brand-purple">Chủ đề 1: Nền Tảng & Nguồn Gốc (Sau khi phát hành Tập 1-4)</h4>
                                    <p className="text-sm text-gray-700 mt-1">
                                        <strong>Sự kiện:</strong> Workshop "Cupping & Thảo Luận: Hành Trình Hạt Cà Phê Việt".
                                    </p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        Nếm thử các mẫu cà phê từ Cầu Đất, thảo luận về câu chuyện của người nông dân và định hướng sự nghiệp trong ngành.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-brand-magenta">Chủ đề 2: Khoa Học & Kỹ Thuật (Sau khi phát hành Tập 5-8)</h4>
                                    <p className="text-sm text-gray-700 mt-1">
                                        <strong>Sự kiện:</strong> Workshop "Chuyên Sâu: Từ Rang Xay Đến Cảm Quan Chuyên Nghiệp".
                                    </p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        Thực hành các kỹ thuật cupping, tìm hiểu về các profile rang khác nhau và lắng nghe chia sẻ từ các giám khảo.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-brand-gold">Chủ đề 3: Tầm Nhìn & Ứng Dụng (Sau khi phát hành Tập 9-10)</h4>
                                    <p className="text-sm text-gray-700 mt-1">
                                        <strong>Sự kiện:</strong> Talkshow "Tương Lai Cà Phê Việt & Lối Sống Năng Động".
                                    </p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        Bàn tròn về cơ hội cho cà phê Việt trên thị trường quốc tế và thảo luận về việc ứng dụng caffeine trong thể thao.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="text-center text-sm text-gray-500 mt-12">
                    <p>Infographic được tạo bởi Duy Bùi</p>
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