import React from 'react';
import { Episode } from './types';

export const episodes: Episode[] = [
  {
    id: 'modal-ep1',
    pillar: 'Trụ Cột 1: Người Truyền Lửa',
    pillarColor: 'brand-deep-blue',
    title: 'Tập 1: Từ đam mê đến Q Grader Quốc tế',
    description: 'Câu chuyện bén duyên và ý nghĩa thực sự của danh xưng Q Grader. Góc khai thác: Sự kiên trì và khổ luyện.',
    isClickable: true,
    modalContent: (
      <>
        <p className="text-lg font-semibold text-brand-purple mb-4">
          "Câu chuyện bén duyên và ý nghĩa thực sự của danh xưng Q Grader. Góc khai thác: Sự kiên trì và khổ luyện."
        </p>
        <hr className="border-gray-200 my-4" />
        <h4 className="text-xl font-bold text-brand-text mb-2">1. Khởi đầu của hành trình</h4>
        <p className="mb-4 text-gray-600">
          Không ai sinh ra đã là chuyên gia. Tập này sẽ đưa thính giả quay ngược thời gian về những ngày đầu tiên Mr. Tuấn tiếp xúc với cà phê. Từ những ly cà phê vỉa hè, đến sự tò mò về hương vị, và quyết định táo bạo dấn thân vào con đường chuyên nghiệp. Điều gì đã thôi thúc một người "ngoại đạo" quyết tâm chinh phục đỉnh cao của ngành?
        </p>
        <h4 className="text-xl font-bold text-brand-text mb-2">2. Thử thách mang tên "Q Grader"</h4>
        <p className="mb-4 text-gray-600">
          Nhiều người nghe đến Q Grader nhưng chưa hiểu sức nặng của nó. Chúng ta sẽ đi sâu vào quá trình thi cử khắc nghiệt:
        </p>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-4 text-sm space-y-2">
          <li><strong>22 bài kiểm tra liên tục:</strong> Không chỉ là uống, mà là phân biệt axit hữu cơ, thử mù (triangulation), và kỹ năng rang mẫu (sample roast).</li>
          <li><strong>Cường độ cao:</strong> Diễn ra trong nhiều ngày liên tục, đòi hỏi sự tập trung tuyệt đối và thể lực tốt.</li>
          <li><strong>Tỷ lệ đỗ thấp:</strong> Đây là lý do tại sao số lượng Q Grader tại Việt Nam vẫn còn khiêm tốn so với tiềm năng ngành.</li>
        </ul>
        <h4 className="text-xl font-bold text-brand-text mb-2">3. Giá trị cốt lõi: Sự kiên trì và kỷ luật</h4>
        <p className="mb-4 text-gray-600">
          Góc khai thác chính của tập này không phải để "khoe bằng cấp", mà là để truyền cảm hứng. Để đạt được vị giác chuẩn mực, Mr. Tuấn đã phải "kiêng khem" ra sao? Những thói quen sinh hoạt nào phải thay đổi để bảo vệ vị giác?
        </p>
        <blockquote className="border-l-4 border-brand-gold pl-4 italic text-gray-700 bg-yellow-50 p-3 rounded-r-lg">
          "Tấm bằng Q Grader không phải là đích đến, nó là tấm vé thông hành để tôi bắt đầu hiểu thực sự ngôn ngữ của hạt cà phê."
        </blockquote>
      </>
    )
  },
  {
    id: 'modal-ep2',
    pillar: 'Trụ Cột 1: Người Truyền Lửa',
    pillarColor: 'brand-deep-blue',
    title: 'Tập 2: Giấc mơ Cà phê Đặc sản Việt',
    description: 'Tầm nhìn Amoka và khó khăn ban đầu khi làm Specialty Coffee. Góc khai thác: Tinh thần doanh chủ, lòng tự tôn dân tộc.',
    isClickable: true,
    modalContent: (
      <>
        <p className="text-lg font-semibold text-brand-purple mb-4">
          "Tầm nhìn Amoka và khó khăn ban đầu khi làm Specialty Coffee. Góc khai thác: Tinh thần doanh chủ, lòng tự tôn dân tộc."
        </p>
        <hr className="border-gray-200 my-4" />
        <h4 className="text-xl font-bold text-brand-text mb-2">1. Tại sao lại là Amoka International?</h4>
        <p className="mb-4 text-gray-600">
          Câu chuyện không bắt đầu từ lợi nhuận, mà từ một trăn trở lớn: <em>"Tại sao Việt Nam xuất khẩu cà phê thứ 2 thế giới, nhưng giá trị mang về lại thấp?"</em>. Tập này sẽ khai thác sâu vào khoảnh khắc "Aha!" khiến Mr. Tuấn quyết định thành lập Amoka với sứ mệnh định vị lại hạt cà phê Việt trên bản đồ chất lượng cao.
        </p>
        <h4 className="text-xl font-bold text-brand-text mb-2">2. "Đánh cược" với Specialty Coffee</h4>
        <p className="mb-4 text-gray-600">
          Làm cà phê đặc sản ở thời điểm thị trường còn lạ lẫm là một ván cược mạo hiểm. Chúng ta sẽ nghe về những ngày đầu khó khăn:
        </p>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-4 text-sm space-y-2">
          <li><strong>Rào cản thị hiếu:</strong> Thuyết phục người Việt uống cà phê có vị chua thanh (acidity) thay vì đắng đậm truyền thống là một cuộc chiến về tư duy.</li>
          <li><strong>Rào cản nguồn cung:</strong> Làm sao để thuyết phục nông dân thay đổi thói quen canh tác, hái chín 100% và sơ chế cầu kỳ khi họ đã quen với cách làm cũ?</li>
        </ul>
        <h4 className="text-xl font-bold text-brand-text mb-2">3. Lòng tự tôn dân tộc</h4>
        <p className="mb-4 text-gray-600">
          Góc nhìn sâu sắc nhất của tập này chính là niềm tự hào. Không chỉ là bán cà phê, Amoka đang bán câu chuyện về thổ nhưỡng, về con người Việt Nam. Sự xúc động khi thấy hạt cà phê Việt đạt điểm cao trên bàn Cupping quốc tế.
        </p>
        <blockquote className="border-l-4 border-brand-gold pl-4 italic text-gray-700 bg-yellow-50 p-3 rounded-r-lg">
          "Làm cà phê đặc sản ở Việt Nam những ngày đầu giống như đi ngược chiều gió. Nhưng nếu không ai đi, bao giờ đường mới mở?"
        </blockquote>
      </>
    )
  },
    {
    id: 'modal-ep3',
    pillar: 'Trụ Cột 2: Farm to Cup',
    pillarColor: 'brand-purple',
    title: 'Tập 3: Giải mã Arabica Cầu Đất',
    description: 'Phân tích Terroir (thổ nhưỡng) tạo nên hương vị đặc trưng. Góc khai thác: Kiến thức địa lý, nông học.',
    isClickable: true,
    modalContent: (
      <>
        <p className="text-lg font-semibold text-brand-deep-blue mb-4">
            "Phân tích Terroir (thổ nhưỡng) tạo nên hương vị đặc trưng. Góc khai thác: Kiến thức địa lý, nông học."
        </p>
        <hr className="border-gray-200 my-4" />
        <h4 className="text-xl font-bold text-brand-text mb-2">1. Cầu Đất - "Vàng Đen" Của Đà Lạt</h4>
        <p className="mb-4 text-gray-600">
            Tại sao Mr. Tuấn và Amoka lại dành tình cảm đặc biệt cho vùng đất này? Tập này sẽ giải thích chi tiết về vị trí địa lý đặc thù của Cầu Đất (độ cao trên 1.500m - 1.650m so với mực nước biển). Đây là độ cao lý tưởng (The Goldilocks Zone) cho cây Arabica phát triển chậm, tích tụ đường và tạo nên độ đặc (density) cao cho hạt nhân.
        </p>
        <h4 className="text-xl font-bold text-brand-text mb-2">2. Terroir: Bí mật nằm trong đất và khí hậu</h4>
        <p className="mb-4 text-gray-600">
            Khán giả sẽ được nghe giải thích về thuật ngữ <strong>"Terroir"</strong> dưới góc nhìn nông học:
        </p>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-4 text-sm space-y-2">
            <li><strong>Biên độ nhiệt:</strong> Sự chênh lệch nhiệt độ lớn giữa ngày và đêm tại Cầu Đất giúp hạt cà phê phát triển hương vị phức tạp.</li>
            <li><strong>Đất đỏ Bazan:</strong> Cấu trúc đất giàu khoáng chất ảnh hưởng trực tiếp đến "Body" (độ dày) và "Acidity" (độ chua) của tách cà phê thành phẩm.</li>
        </ul>
        <h4 className="text-xl font-bold text-brand-text mb-2">3. Từ Nông trại đến Tách cà phê (Farm to Cup)</h4>
        <p className="mb-4 text-gray-600">
            Mr. Tuấn sẽ chia sẻ câu chuyện đằng sau những lô cà phê mà Amoka đang sử dụng. Không chỉ là mua bán, đó là quá trình đồng hành cùng nông dân để canh tác bền vững, hạn chế hóa chất và bảo vệ hệ sinh thái rừng.
        </p>
        <blockquote className="border-l-4 border-brand-purple pl-4 italic text-gray-700 bg-purple-50 p-3 rounded-r-lg">
            "Hương vị của cà phê Cầu Đất không chỉ đến từ giống cây, nó là sự kết tinh của sương mù, đất đỏ và bàn tay người nông dân."
        </blockquote>
      </>
    )
  },
  {
    id: 'modal-ep4',
    pillar: 'Trụ Cột 2: Farm to Cup',
    pillarColor: 'brand-purple',
    title: 'Tập 4: Nỗi niềm người nông dân',
    description: 'Mối quan hệ giữa nhà rang xay và nông dân; sơ chế đúng chuẩn. Góc khai thác: Tính nhân văn, chuỗi cung ứng.',
    isClickable: true,
    modalContent: (
      <>
        <p className="text-lg font-semibold text-brand-deep-blue mb-4">
            "Mối quan hệ giữa nhà rang xay và nông dân; sơ chế đúng chuẩn. Góc khai thác: Tính nhân văn, chuỗi cung ứng."
        </p>
        <hr className="border-gray-200 my-4" />
        <h4 className="text-xl font-bold text-brand-text mb-2">1. Mối quan hệ "Cộng Sinh" thay vì "Mua - Bán"</h4>
        <p className="mb-4 text-gray-600">
            Để có hạt cà phê ngon, nhà rang xay không thể chỉ đợi đến mùa vụ rồi đến mua. Mr. Tuấn sẽ chia sẻ về hành trình "nằm vùng" cùng nông dân. Đó là câu chuyện về xây dựng niềm tin: Làm sao để nông dân tin rằng khi họ bỏ công chăm sóc kỹ hơn, họ sẽ được trả giá xứng đáng và ổn định lâu dài?
        </p>
        <h4 className="text-xl font-bold text-brand-text mb-2">2. Cuộc chiến thay đổi thói quen "Sơ chế đúng chuẩn"</h4>
        <p className="mb-4 text-gray-600">
            Từ thói quen hái xô (hái cả xanh lẫn chín) và phơi trên nền đất đến quy trình chuẩn Specialty là một khoảng cách mênh mông:
        </p>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-4 text-sm space-y-2">
            <li><strong>Hái chín 100%:</strong> Tăng chi phí nhân công và thời gian thu hoạch gấp nhiều lần.</li>
            <li><strong>Kiểm soát lên men:</strong> Nông dân phải học cách đo độ pH, nhiệt độ, và ghi chép nhật ký sơ chế như một nhà khoa học thực thụ.</li>
        </ul>
        <h4 className="text-xl font-bold text-brand-text mb-2">3. Tính nhân văn trong từng tách cà phê</h4>
        <p className="mb-4 text-gray-600">
            Góc khai thác này chạm đến trái tim người nghe: Sự vất vả của đôi bàn tay nứt nẻ, những giọt mồ hôi trên rẫy cao. Khi chúng ta thưởng thức một tách cà phê Amoka, chúng ta đang ủng hộ sinh kế của cả một gia đình và góp phần thay đổi bộ mặt nông nghiệp vùng cao.
        </p>
        <blockquote className="border-l-4 border-brand-purple pl-4 italic text-gray-700 bg-purple-50 p-3 rounded-r-lg">
            "Cà phê ngon nhất là cà phê được làm ra từ sự hạnh phúc của người nông dân, chứ không phải từ sự bóc lột sức lao động."
        </blockquote>
      </>
    )
  },
  {
    id: 'modal-ep5',
    pillar: 'Trụ Cột 3: Rang Xay (Roasting)',
    pillarColor: 'brand-magenta',
    title: 'Tập 5: Rang: Nghệ thuật hay Khoa học?',
    description: 'Kiến thức SCA Roasting; các biến số (nhiệt, gió, thời gian). Góc khai thác: Kiến thức chuyên sâu (geeky) dễ hiểu.',
    isClickable: true,
    modalContent: (
       <>
        <p className="text-lg font-semibold text-brand-deep-blue mb-4">
            "Kiến thức SCA Roasting; các biến số (nhiệt, gió, thời gian). Góc khai thác: Kiến thức chuyên sâu (geeky) dễ hiểu."
        </p>
        <hr className="border-gray-200 my-4" />
        <h4 className="text-xl font-bold text-brand-text mb-2">1. Hóa Học Đằng Sau Màu Nâu (The Chemistry)</h4>
        <p className="mb-4 text-gray-600">
            Nhiều người nghĩ rang cà phê chỉ là làm cho hạt chín. Nhưng Mr. Tuấn sẽ giải thích nó là một chuỗi phản ứng hóa học thú vị, được diễn giải đơn giản như nấu ăn:
        </p>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-4 text-sm space-y-2">
            <li><strong>Phản ứng Maillard:</strong> Giống như khi nướng thịt bò (steak), phản ứng này tạo ra hàng trăm hợp chất hương thơm phức tạp (mùi bánh nướng, mùi hạt dẻ...).</li>
            <li><strong>Caramel hóa:</strong> Phản ứng bẻ gãy đường tự nhiên trong hạt cà phê để tạo ra vị ngọt và màu nâu đẹp mắt. Rang quá tay? Đường cháy thành than (vị đắng khét).</li>
        </ul>
        <h4 className="text-xl font-bold text-brand-text mb-2">2. "Tam Giác Vàng" Biến Số: Nhiệt - Gió - Thời Gian</h4>
        <p className="mb-4 text-gray-600">
            Người thợ rang (Roaster) giống như một nhạc trưởng điều khiển 3 nhạc cụ chính:
        </p>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-4 text-sm space-y-2">
            <li><strong>Nhiệt độ (Heat):</strong> Quyết định tốc độ phản ứng (đốt cháy giai đoạn hay từ từ ngấm).</li>
            <li><strong>Luồng khí (Airflow):</strong> Vừa giúp truyền nhiệt đều, vừa cuốn trôi vỏ lụa và khói bụi để cà phê có vị "sạch" (clean cup).</li>
            <li><strong>Thời gian phát triển (Development Time):</strong> Quyết định Body (độ dày) và Acidity (độ chua). Rang nhanh giữ chua, rang chậm tăng độ dày.</li>
        </ul>
        <h4 className="text-xl font-bold text-brand-text mb-2">3. SCA Standard: Khác Biệt Giữa "Chín" và "Đạt Đỉnh"</h4>
        <p className="mb-4 text-gray-600">
            Ở góc độ chuyên gia SCA, rang "chín" là chưa đủ. Mr. Tuấn sẽ chia sẻ về việc tìm ra <strong>"Điểm Ngọt" (Sweet Spot)</strong> của từng loại hạt. Làm sao để rang một mẻ cà phê Cầu Đất khác với một mẻ Ethiopia? Tại sao sai lệch chỉ 3 giây hoặc 1 độ C cũng có thể thay đổi hoàn toàn hương vị?
        </p>
        <blockquote className="border-l-4 border-brand-magenta pl-4 italic text-gray-700 bg-pink-50 p-3 rounded-r-lg">
            "Rang cà phê là khoa học về sự chính xác, nhưng để chạm đến cảm xúc người uống, nó cần trái tim của một nghệ sĩ."
        </blockquote>
      </>
    )
  },
  {
    id: 'modal-ep6',
    pillar: 'Trụ Cột 3: Rang Xay (Roasting)',
    pillarColor: 'brand-magenta',
    title: 'Tập 6: Triết lý rang của Amoka',
    description: 'Áp dụng kỹ thuật quốc tế vào hạt Việt; giữ "hồn" terroir. Góc khai thác: Sự sáng tạo và bản sắc riêng.',
    isClickable: true,
    modalContent: (
      <>
        <p className="text-lg font-semibold text-brand-deep-blue mb-4">
            "Áp dụng kỹ thuật quốc tế vào hạt Việt; giữ 'hồn' terroir. Góc khai thác: Sự sáng tạo và bản sắc riêng."
        </p>
        <hr className="border-gray-200 my-4" />
        <h4 className="text-xl font-bold text-brand-text mb-2">1. "Hòa Nhập Nhưng Không Hòa Tan"</h4>
        <p className="mb-4 text-gray-600">
            Sử dụng tiêu chuẩn SCA không có nghĩa là ép hạt cà phê Việt Nam phải có hương vị giống hệt hạt Ethiopia hay Kenya. Mr. Tuấn sẽ chia sẻ quan điểm về việc dùng kỹ thuật quốc tế như một "công cụ" để khai phá tiềm năng ẩn giấu của hạt Việt, thay vì cố gắng biến nó thành một bản sao lỗi.
        </p>
        <h4 className="text-xl font-bold text-brand-text mb-2">2. Kỹ Thuật "May Đo" Cho Hạt Việt</h4>
        <p className="mb-4 text-gray-600">
            Hạt Arabica Cầu Đất hay Fine Robusta Tây Nguyên có mật độ (density) và độ ẩm khác hoàn toàn với hạt nhập khẩu.
        </p>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-4 text-sm space-y-2">
            <li><strong>Điều chỉnh Profile:</strong> Cách Amoka điều chỉnh nhiệt độ nạp (Charge Temp) và kiểm soát tỷ lệ gia nhiệt (RoR) để tránh lỗi "Baking" (nhạt nhẽo) hoặc "Scorching" (cháy bề mặt) thường gặp khi rang hạt Việt.</li>
            <li><strong>Tôn trọng bản sắc:</strong> Nếu hạt Cầu Đất có hương thông, hương trà, thì profile rang phải làm bật lên điều đó, chứ không phải rang đậm để che đi.</li>
        </ul>
        <h4 className="text-xl font-bold text-brand-text mb-2">3. Định Vị Hương Vị Việt Trên Bản Đồ Specialty</h4>
        <p className="mb-4 text-gray-600">
            Mục tiêu cuối cùng của Triết lý rang Amoka là tạo ra một "Identity" (nhận diện) rõ ràng. Khi khách quốc tế uống, họ phải thốt lên: "À, đây là hương vị đặc trưng của Việt Nam!", một hương vị tinh tế, sạch sẽ và đầy chiều sâu.
        </p>
        <blockquote className="border-l-4 border-brand-magenta pl-4 italic text-gray-700 bg-pink-50 p-3 rounded-r-lg">
            "Người thợ rang giỏi không áp đặt cái tôi của mình lên hạt cà phê, mà là người biết cách lắng nghe để hạt cà phê kể câu chuyện của chính nó."
        </blockquote>
      </>
    )
  },
  {
    id: 'modal-ep7',
    pillar: 'Trụ Cột 4: Cảm Quan (Sensory)',
    pillarColor: 'brand-coral',
    title: 'Tập 7: Cupping 101: Nếm như chuyên gia',
    description: 'Hướng dẫn cupping tại nhà; phân biệt hương, vị, lỗi. Góc khai thác: Tính ứng dụng thực tế.',
    isClickable: true,
    modalContent: (
      <>
        <p className="text-lg font-semibold text-brand-deep-blue mb-4">
            "Hướng dẫn cupping tại nhà; phân biệt hương, vị, lỗi. Góc khai thác: Tính ứng dụng thực tế (DIY)."
        </p>
        <hr className="border-gray-200 my-4" />
        <h4 className="text-xl font-bold text-brand-text mb-2">1. Cupping Không Hề "Hàn Lâm"</h4>
        <p className="mb-4 text-gray-600">
            Nghe đến "Cupping" (thử nếm), nhiều người nghĩ cần phòng lab xịn sò. Nhưng Mr. Tuấn sẽ hướng dẫn cách biến căn bếp nhà bạn thành trạm thử nếm mini. Chỉ cần: vài cái chén ăn cơm, một cái thìa, nước nóng và cà phê. Quan trọng là phương pháp, không phải dụng cụ.
        </p>
        <h4 className="text-xl font-bold text-brand-text mb-2">2. Quy Trình 3 Bước Cơ Bản</h4>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-4 text-sm space-y-2">
            <li><strong>Ngửi Hương (Aroma):</strong> Hương khô (khi vừa xay) khác gì với hương ướt (khi rót nước sôi)? Hít thật sâu để cảm nhận hương hoa hay mùi khói.</li>
            <li><strong>Phá Bọt (Break Crust):</strong> Khoảnh khắc gạt lớp bọt trên bề mặt là lúc hương thơm bùng nổ mạnh mẽ nhất.</li>
            <li><strong>Hút (Slurp):</strong> Tại sao giám khảo lại hút "soàn soạt" thật to? Không phải mất lịch sự, mà là để phun sương cà phê khắp khoang miệng, giúp cảm nhận trọn vẹn vị giác.</li>
        </ul>
        <h4 className="text-xl font-bold text-brand-text mb-2">3. Phân Biệt "Hương Vị" và "Lỗi" (Defects)</h4>
        <p className="mb-4 text-gray-600">
            Làm sao biết cà phê này ngon hay dở?
        </p>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-4 text-sm space-y-2">
            <li><strong>Good taste:</strong> Vị chua thanh (như cam, chanh), vị ngọt hậu (như mật ong), hương hoa, hương hạt dẻ.</li>
            <li><strong>Bad taste (Lỗi):</strong> Vị chát (như thuốc tây), mùi mốc, mùi đất, hay mùi chua gắt (giấm) do lên men lỗi. Biết được điều này giúp bạn tránh mua phải cà phê kém chất lượng.</li>
        </ul>
        <blockquote className="border-l-4 border-brand-coral pl-4 italic text-gray-700 bg-red-50 p-3 rounded-r-lg">
            "Nếm cà phê không chỉ là uống, đó là lúc bạn thực sự tĩnh lại để lắng nghe câu chuyện mà hạt cà phê muốn kể."
        </blockquote>
      </>
    )
  },
  {
    id: 'modal-ep8',
    pillar: 'Trụ Cột 4: Cảm Quan (Sensory)',
    pillarColor: 'brand-coral',
    title: 'Tập 8: Chuyện hậu trường Giám khảo',
    description: 'Tiêu chí chấm thi; áp lực và những hạt cà phê "wow". Góc khai thác: Chuyện hậu trường (Behind the scenes).',
    isClickable: true,
    modalContent: (
      <>
        <p className="text-lg font-semibold text-brand-deep-blue mb-4">
            "Tiêu chí chấm thi; áp lực và những hạt cà phê 'wow'. Góc khai thác: Chuyện hậu trường (Behind the scenes)."
        </p>
        <hr className="border-gray-200 my-4" />
        <h4 className="text-xl font-bold text-brand-text mb-2">1. Bảng Điểm Quyền Lực (The Score Sheet)</h4>
        <p className="mb-4 text-gray-600">
            Chấm điểm không chỉ là "ngon" hay "dở". Đó là một quy trình phân tích khoa học dựa trên biểu mẫu của Hiệp hội Cà phê Đặc sản (SCA). Các giám khảo sẽ "mổ xẻ" từng khía cạnh:
        </p>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-4 text-sm space-y-2">
            <li><strong>Hương thơm (Fragrance/Aroma):</strong> Mùi hương khi cà phê khô và ướt có phức tạp không? Có hương hoa, trái cây, hay chỉ mùi khét?</li>
            <li><strong>Vị (Flavor):</strong> Đây là "linh hồn" của cà phê. Nó kể câu chuyện gì? Vị quả mọng, socola, hay các loại hạt?</li>
            <li><strong>Độ chua (Acidity):</strong> Vị chua có sáng và dễ chịu như chanh vàng, hay gắt và khó chịu? Độ chua tốt tạo ra sự sống động.</li>
            <li><strong>Thể chất (Body):</strong> Cảm giác cà phê trong miệng. Nó nhẹ như trà, hay dày và mượt như kem?</li>
            <li><strong>Hậu vị (Aftertaste):</strong> Sau khi nuốt, vị ngon có còn đọng lại hay biến mất ngay lập tức?</li>
        </ul>
        <h4 className="text-xl font-bold text-brand-text mb-2">2. Áp Lực Vô Hình Sau Bàn Nếm</h4>
        <p className="mb-4 text-gray-600">
            Trở thành giám khảo là một vinh dự nhưng cũng đầy áp lực. Mr. Tuấn sẽ chia sẻ về "mặt tối" của công việc này:
        </p>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-4 text-sm space-y-2">
             <li><strong>Mệt mỏi cảm quan (Sensory Fatigue):</strong> Sau khi nếm hàng chục mẫu, làm sao để vị giác vẫn giữ được sự nhạy bén và công tâm?</li>
             <li><strong>Sự khách quan tuyệt đối:</strong> Phải gạt bỏ sở thích cá nhân. Một giám khảo có thể không thích vị chua, nhưng vẫn phải cho điểm cao nếu đó là vị chua chất lượng.</li>
             <li><strong>Trách nhiệm:</strong> Một điểm số có thể quyết định giá trị của cả một lô hàng, ảnh hưởng đến sinh kế của người nông dân và danh tiếng nhà rang xay.</li>
        </ul>
        <h4 className="text-xl font-bold text-brand-text mb-2">3. Góc Hỏi Đáp Cùng Giám Khảo (Q&A)</h4>
        <div className="space-y-4">
            <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-semibold text-brand-deep-blue">Hỏi: Làm sao để một người mới bắt đầu có thể tập nếm cà phê tại nhà?</p>
                <p className="text-gray-700 mt-1 text-sm"><strong>Đáp:</strong> "Cách tốt nhất là so sánh. Bạn hãy mua 2-3 loại cà phê khác nhau (ví dụ: một loại sơ chế ướt, một loại sơ chế khô). Pha chúng cùng lúc và nếm song song. Đừng lo lắng về việc gọi tên hương vị chính xác, chỉ cần ghi lại cảm nhận: cái nào chua hơn, ngọt hơn, dày hơn. Lặp lại nhiều lần, vị giác của bạn sẽ tiến bộ."</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-semibold text-brand-deep-blue">Hỏi: Điểm số có phải là tất cả không?</p>
                <p className="text-gray-700 mt-1 text-sm"><strong>Đáp:</strong> "Điểm số là một thước đo chất lượng quan trọng, nhưng không phải là tất cả. Cà phê ngon nhất là cà phê hợp khẩu vị của bạn. Có những loại cà phê 88 điểm với vị chua rất sáng mà bạn có thể không thích, nhưng bạn lại mê mẩn một loại 85 điểm với hương socola đậm đà. Hãy tin vào vị giác của mình!"</p>
            </div>
        </div>
         <blockquote className="mt-4 border-l-4 border-brand-coral pl-4 italic text-gray-700 bg-red-50 p-3 rounded-r-lg">
            "Công việc của giám khảo là lắng nghe câu chuyện mà hạt cà phê kể, và dịch nó sang ngôn ngữ của điểm số một cách trung thực nhất."
        </blockquote>
      </>
    )
  },
  {
    id: 'modal-ep9',
    pillar: 'Trụ Cột 5: Tầm Nhìn Tương Lai',
    pillarColor: 'brand-gold',
    title: 'Tập 9: Cà phê Việt trên bản đồ thế giới',
    description: 'Tương lai Fine Robusta & Arabica Việt Nam. Cơ hội và thách thức. Góc khai thác: Phân tích vĩ mô, tầm nhìn.',
    isClickable: true,
    modalContent: (
      <>
        <p className="text-lg font-semibold text-brand-deep-blue mb-4">
            "Tương lai Fine Robusta & Arabica Việt Nam. Cơ hội và thách thức. Góc khai thác: Phân tích vĩ mô, tầm nhìn."
        </p>
        <hr className="border-gray-200 my-4" />
        <h4 className="text-xl font-bold text-brand-text mb-2">1. Cuộc Cách Mạng "Fine Robusta" - Lợi Thế Độc Quyền</h4>
        <p className="mb-4 text-gray-600">
            Thế giới từng mặc định Robusta là cà phê rẻ tiền, dùng cho cà phê hòa tan. Việt Nam đang dẫn đầu cuộc cách mạng thay đổi định kiến này. Fine Robusta được sơ chế cẩn thận như Arabica, mở ra một thế giới hương vị hoàn toàn mới: socola đen, các loại hạt, caramen đậm đà, với thể chất dày và ít chua, hoàn hảo cho espresso. Đây chính là "vũ khí bí mật" của Việt Nam.
        </p>
        <h4 className="text-xl font-bold text-brand-text mb-2">2. Sự Trỗi Dậy Của Arabica Việt Nam - Khẳng Định Chất Lượng</h4>
        <p className="mb-4 text-gray-600">
            Song song với Robusta, Arabica Việt Nam cũng đang có những bước tiến vượt bậc. Các vùng trồng như <strong>Cầu Đất (Lâm Đồng)</strong> hay <strong>Sơn La</strong> đang sản xuất ra những hạt cà phê với chất lượng đáng kinh ngạc, được thế giới công nhận. Với các phương pháp sơ chế tiên tiến (Honey, Anaerobic), Arabica Việt Nam đang dần tạo ra bản sắc riêng: cân bằng, ngọt ngào, với hương hoa và trái cây nhiệt đới tinh tế.
        </p>
        <h4 className="text-xl font-bold text-brand-text mb-2">3. Cơ Hội và Thách Thức</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg">
                <h5 className="font-bold text-green-800">Cơ Hội Vàng</h5>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                    <li>Nhu cầu cà phê đặc sản toàn cầu tăng.</li>
                    <li>Xu hướng "single-origin" (dùng một nguồn gốc).</li>
                    <li>Câu chuyện Farm-to-cup hấp dẫn.</li>
                    <li>Biến đổi khí hậu làm giảm sản lượng ở nơi khác.</li>
                </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-lg">
                <h5 className="font-bold text-red-800">Thách Thức Lớn</h5>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                    <li>Định kiến về "cà phê giá rẻ".</li>
                    <li>Marketing và xây dựng thương hiệu quốc gia.</li>
                    <li>Đảm bảo chất lượng đồng đều.</li>
                    <li>Cạnh tranh từ các quốc gia mới nổi khác.</li>
                </ul>
            </div>
        </div>
        <h4 className="text-xl font-bold text-brand-text mb-2">4. Khán Giả Khai Thác Được Gì?</h4>
        <p className="mb-4 text-gray-600">Tương lai của cà phê Việt không chỉ là câu chuyện của chuyên gia, mà còn là của chính bạn:</p>
         <div className="space-y-4">
            <div className="bg-purple-50 p-3 rounded-lg">
                <p className="font-semibold text-brand-purple">Dành cho Home Brewers:</p>
                <p className="text-gray-700 mt-1 text-sm">Hãy mạnh dạn thử! Đừng chỉ tìm kiếm cà phê Ethiopia hay Colombia. Hãy hỏi các nhà rang xay về hạt Arabica Sơn La hay Fine Robusta từ Buôn Ma Thuột. Bạn sẽ khám phá ra những hương vị đáng tự hào ngay tại quê nhà và trở thành một phần của câu chuyện nâng tầm cà phê Việt.</p>
            </div>
            <div className="bg-coral-50 p-3 rounded-lg">
                <p className="font-semibold text-brand-coral">Dành cho Industry Rookies:</p>
                <p className="text-gray-700 mt-1 text-sm">Đây là một lĩnh vực màu mỡ. Ngành đang rất cần những Barista, Roaster, và chuyên gia Marketing hiểu về câu chuyện cà phê Việt để kể nó cho thế giới. Cơ hội để bạn tạo ra sự khác biệt và dấu ấn cá nhân là rất lớn.</p>
            </div>
        </div>
        <blockquote className="mt-4 border-l-4 border-brand-gold pl-4 italic text-gray-700 bg-yellow-50 p-3 rounded-r-lg">
            "Thế giới không cần thêm một bản sao của cà phê Colombia. Thế giới đang chờ đợi hương vị nguyên bản và độc đáo của chính Việt Nam."
        </blockquote>
      </>
    )
  },
  {
    id: 'modal-ep10',
    pillar: 'Trụ Cột Đặc Biệt: Khoa Học & Thể Thao',
    pillarColor: 'brand-green',
    title: 'Tập 10: Caffeine & Hiệu Suất Thể Thao',
    description: 'Khám phá cơ sở khoa học đằng sau việc sử dụng caffeine để tối ưu hóa hiệu suất vận động, đặc biệt trong các môn sức bền.',
    isClickable: true,
    modalContent: (
      <>
        <p className="text-lg font-semibold text-emerald-700 mb-4">
            "Việc sử dụng caffeine để tăng cường hiệu suất tập luyện, đặc biệt là các môn sức bền như đua xe đạp đường dài, là có cơ sở khoa học mạnh mẽ và được cộng đồng khoa học thể thao công nhận."
        </p>
        <hr className="border-gray-200 my-4" />
        <h4 className="text-xl font-bold text-brand-text mb-2">1. Bằng Chứng Khoa Học Về Caffeine và Hiệu Suất</h4>
        <p className="mb-4 text-gray-600">
          Các nghiên cứu, đặc biệt là các phân tích tổng hợp (meta-analysis), đã xác nhận tác dụng tăng lực (ergogenic) của caffeine. Tác dụng nổi bật nhất là cải thiện <strong>hiệu suất sức bền từ 2% đến 4%</strong> trong các bài tập như chạy marathon, đạp xe, bơi lội.
        </p>
        
        <h4 className="text-xl font-bold text-brand-text mb-2">2. Cơ Chế Hoạt Động (Làm thế nào Caffeine hoạt động?)</h4>
        <p className="mb-4 text-gray-600">
            Cơ chế chính liên quan đến hệ thần kinh trung ương (CNS):
        </p>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-4 text-sm space-y-2">
            <li><strong>Đối kháng Thụ thể Adenosine:</strong> Adenosine là chất gây mệt mỏi và buồn ngủ. Caffeine ngăn chặn adenosine, giúp tăng cường sự tỉnh táo và tập trung.</li>
            <li><strong>Giảm Cảm Nhận Gắng Sức (RPE):</strong> Đây là tác dụng quan trọng nhất. Vận động viên cảm thấy bài tập đang thực hiện ít khó khăn hơn, cho phép họ duy trì cường độ cao hơn hoặc tập luyện lâu hơn.</li>
            <li><strong>Giảm Cảm Giác Đau:</strong> Giúp vận động viên chịu đựng tốt hơn sự khó chịu khi tập luyện cường độ cao.</li>
        </ul>

        <h4 className="text-xl font-bold text-brand-text mb-2">3. Nghiên Cứu và Các Tổ Chức Uy Tín</h4>
        <p className="mb-4 text-gray-600">
            Các bằng chứng khoa học về caffeine đến từ nhiều trường đại học và tổ chức nghiên cứu thể thao hàng đầu. Các tạp chí uy tín như <strong>British Journal of Sports Medicine</strong> thường xuyên đăng tải các phân tích tổng hợp lớn về chủ đề này.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-gray-300">
            <h5 className="font-bold text-brand-deep-blue mb-2">Tuyên bố Chính thức của Hiệp hội Dinh dưỡng Thể thao Quốc tế (ISSN)</h5>
            <p className="text-sm text-gray-600 mb-3">ISSN là một trong những tổ chức uy tín nhất thế giới. Tuyên bố của họ đóng vai trò là kim chỉ nam cho các chuyên gia và vận động viên:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li><strong>Hiệu quả được chứng minh:</strong> Caffeine tăng cường hiệu suất tập luyện, đặc biệt là sức bền aerobic (lợi ích từ trung bình đến lớn).</li>
                <li><strong>Lợi ích đa dạng:</strong> Mang lại lợi ích nhỏ đến trung bình cho sức bền cơ bắp, tốc độ di chuyển, sức mạnh, khả năng chạy nước rút, nhảy và ném.</li>
                <li><strong>Hiệu quả cao đối với Time-Trial:</strong> Rất hiệu quả cho các bài đua tính giờ, một yếu tố then chốt trong đua xe đạp.</li>
                <li><strong>Liều lượng & Thời gian:</strong> Khuyến nghị chuẩn là 3–6 mg/kg, uống 60 phút trước khi tập.</li>
                <li><strong>Caffeine từ cà phê:</strong> Cà phê cũng có hiệu quả, dù caffeine dạng viên (anhydrous) có thể nhỉnh hơn một chút trong một số trường hợp.</li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">
                <em>Các tuyên bố này là sự tổng hợp của nhiều nghiên cứu lớn từ các trường đại học uy tín như Đại học Memphis (Mỹ) và Đại học Hull (Anh).</em>
            </p>
        </div>

        <h4 className="text-xl font-bold text-brand-text mb-2">💡 Lưu ý Thực Tiễn Cho Vận Động Viên</h4>
        <div className="space-y-4">
            <div className="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-400">
                <p className="font-semibold text-emerald-800">Liều lượng tối ưu:</p>
                <p className="text-gray-700 mt-1 text-sm">Liều lượng được khuyến nghị là <strong>3-6 mg caffeine / kg trọng lượng cơ thể</strong>, uống khoảng 60 phút trước khi tập. Liều cao hơn (trên 9 mg/kg) không mang lại lợi ích thêm và có thể tăng tác dụng phụ.</p>
            </div>
            <div className="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-400">
                <p className="font-semibold text-emerald-800">Phản ứng cá nhân:</p>
                <p className="text-gray-700 mt-1 text-sm">Mỗi người phản ứng với caffeine khác nhau do yếu tố di truyền. Vận động viên cần thử nghiệm liều lượng trong quá trình tập luyện trước khi áp dụng vào thi đấu chính thức.</p>
            </div>
             <div className="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-400">
                <p className="font-semibold text-emerald-800">Tổ chức Chống Doping Thế giới (WADA):</p>
                <p className="text-gray-700 mt-1 text-sm">Caffeine đã được <strong>loại khỏi danh sách chất cấm</strong> của WADA từ năm 2004, nhưng vẫn được theo dõi. Việc sử dụng trong ngưỡng khuyến nghị là hoàn toàn hợp lệ.</p>
            </div>
        </div>

        <blockquote className="mt-6 border-l-4 border-emerald-500 pl-4 italic text-gray-700 bg-emerald-50 p-3 rounded-r-lg">
            "Việc sử dụng caffeine trong các cuộc thi đạp xe đường dài là chiến lược được cộng đồng khoa học thể thao toàn cầu chứng minh và công nhận như một chất hỗ trợ tăng lực (ergogenic aid) hợp pháp, an toàn và hiệu quả."
        </blockquote>
      </>
    )
  },
];