import { useState } from 'react'
import imageSample1 from './img/question/sample.png'
import imageSample2 from './img/answer/sampleAnswer.JPG'
import ans2 from './img/answer/DSC_0188.JPG'
import attendance1 from './img/answer/attendance1-1.jpg'
import attendance2 from './img/answer/attendance2-1.jpg'
import attendance3 from './img/answer/attendance3-1.jpg'
import attendance4 from './img/answer/attendance4.JPG'
import keiroMatome from './img/answer/keiroMatome.png'
import cerebellum from './img/answer/cerebellum.png'
import sentuusi from './img/answer/sentuusi.png'
import willis from './img/answer/willis.png'
import bronchiole from './img/answer/bronchiole.png'
import gastricGland from './img/answer/gastricGland.png'
import marrow from './img/answer/marrow.png'
import spleen from './img/answer/spleen.png'
import adrenalGland from './img/answer/adrenalGland.png'
import bloodUrineBarrier from './img/answer/bloodUrineBarrier.png'
import hepaticLobule from './img/answer/hepaticLobule.png'
import liver from './img/answer/liver.png'
import thalamusSyndrome from './img/answer/thalamusSyndrome.png'
import crossSectionOfCNS from './img/answer/crossSectionOfCNS.png'
import CN10 from './img/answer/CN10.png'
import CN11 from './img/answer/CN11.png'
import nidusAVM from './img/answer/nidusAVM.png'
import complexParalyzedCN from './img/answer/complexParalyzedCN.png'
import pyramidalTract from './img/answer/InkedpyramidalTract_LI.jpg'
import CN12 from './img/answer/CN12.JPG'
import brainStem from './img/question/220528brainStem.png'
import mesencephalon from './img/answer/mesencephalon.png'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '出席確認など',
      groupContents: [
        {
          detailInfo: '4/27',
          questionImg: [],
          questionSentence: 'ぶどう膜はどれか',
          choices: ['脈絡膜', '角膜', '水晶体', '強膜', '網膜'],
          answerImg: [],
          answer: '',
          commentary:
            '脈絡膜choroid（暗箱）：強膜と網膜の間に存在する薄い膜で、豊富なメラニン色素が光を吸収する。脈絡膜に分布する毛様体血管系は網膜との境界付近に毛細血管網を作り、網膜の外層を栄養する。脈絡膜はまた、眼球前部に分布する神経の通路ともなっている。',
        },
        {
          detailInfo: '4/27',
          questionImg: [],
          questionSentence: '角膜反射の求心路はどれか',
          choices: ['三叉神経', '動眼神経', '外転神経', '滑車神経', '顔面神経'],
          answerImg: [],
          answer: '',
          commentary:
            '三叉神経は角膜反射（眼臉の反射的閉合）に関与する体性求心性線維を出す。実際に眼臉を閉合するのは顔面神経。',
        },
        {
          detailInfo: '5/11',
          questionImg: [],
          questionSentence: '誤っているものはどれか。一つ選べ。',
          choices: [
            '交感神経の神経伝達物質は節前・節後線維ともにノルアドレナリンである',
            '副交感神経の節前線維は脳幹と仙髄の側角にある神経細胞に発する',
            '交感神経の節前線維は胸髄と腰髄の側角にある神経細胞に発する',
            '自律神経は体温調節、循環、呼吸、消化、分泌等の生命維持機能を調節する',
            '副交感神経節は効果器の近くにある',
          ],
          answerImg: [],
          answer:
            '交感神経の神経伝達物質は節前・節後線維ともにノルアドレナリンである',
          commentary:
            '交感神経の神経伝達物質は節前線維はアセチルコリン、節後線維はノルアドレナリンである（例外あり：副腎髄質）',
        },
        {
          detailInfo: '5/11',
          questionImg: [],
          questionSentence: '誤っているものはどれか。一つ選べ。',
          choices: [
            '舌下神経は頚神経叢の一部である。',
            '頚神経叢は鎖骨上神経、頚横神経、大耳介神経、小後頭神経、横隔神経、頚神経ワナで構成される。',
            '頚神経叢の枝は頚部の皮膚、舌骨下筋群、横隔膜に分布する。',
            'ホーナー症候群は眼球およびその周囲を正常な状態に維持する交感神経支配の異常によって発症する。',
          ],
          answerImg: [],
          answer: '舌下神経は頚神経叢の一部である。',
          commentary:
            '舌下神経は頚神経叢の一部（上部）と伴行している部分もあるが、繋がりは無い。',
        },
        {
          detailInfo: '5/11',
          questionImg: [],
          questionSentence: '誤っているものはどれか。一つ選べ。',
          choices: [
            '上部腕神経叢の損傷で尺骨神経と正中神経の機能が脱落する。',
            '尺骨神経の障害で鷲手になる。',
            '橈骨神経の障害で下垂手になる。',
            '猿手は正中神経の障害で起こる。',
          ],
          answerImg: [],
          answer: '上部腕神経叢の損傷で尺骨神経と正中神経の機能が脱落する。',
          commentary:
            '尺骨神経と正中神経の機能が脱落するのは下部腕神経叢の損傷。',
        },
        {
          detailInfo: '5/11',
          questionImg: [],
          questionSentence: '誤っているものはどれか。一つ選べ。',
          choices: [
            '肋間神経ブロックのためには麻酔薬の入った注射針を必ず神経に当てなければならない。',
            '肋間神経は，胸壁と腹壁を形成する骨格筋を支配するとともに、胸壁と腹壁の皮膚にも分布する。',
            '脊髄神経の後枝は体幹後側の筋（固有背筋）および皮膚に分布する。',
            '胸腔内に貯留した空気や液体を体外に排除するための手技として、胸腔ドレナージや胸腔穿刺がある。',
          ],
          answerImg: [],
          answer:
            '肋間神経ブロックのためには麻酔薬の入った注射針を必ず神経に当てなければならない。',
          commentary: '部分麻酔のときと同様に、注射は神経周辺であればよい。',
        },
        {
          detailInfo: '5/13',
          questionImg: [],
          questionSentence:
            '右眼に光を当てると右眼縮瞳（−）、左眼縮瞳（−）、左眼に光を当てると左眼縮瞳（＋）、右眼縮瞳（＋）だった。障害されているのはどれか？',
          choices: [
            '右視神経',
            '左視神経',
            '左動眼神経',
            '右動眼神経',
            '視交差',
          ],
          answerImg: [attendance2, attendance3],
          answer: '',
          commentary:
            '視交叉以降では視神経線維の半分は反対側に行くため、左右のどちらかからの光刺激もE-W核に届き縮瞳する。',
        },
        {
          detailInfo: '5/13',
          questionImg: [],
          questionSentence: '視神経の走行で正しいのはどれか？',
          choices: [
            '網膜ー視神経ー視交差ー視索ー外側膝状体ー視放線ー視覚中枢 ',
            '網膜ー視放線ー視交差ー外側膝状体ー視索ー視神経ー視覚中枢',
            '網膜ー視神経ー視交差ー視索ー視放線ー外側膝状体ー視覚中枢',
            '網膜ー視索ー視交差ー視神経ー外側膝状体ー視放線ー視覚中枢 ',
          ],
          answerImg: [attendance1],
          answer: '',
          commentary: '外側膝状体は視床の部位。',
        },
        {
          detailInfo: '5/13',
          questionImg: [],
          questionSentence:
            '甲状腺の手術後にみられる嗄声の原因となる神経はどれか？',
          choices: ['迷走神経', '顔面神経', '舌咽神経', '副神経'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '5/13',
          questionImg: [],
          questionSentence: '味覚を伝える神経細胞が含まれるのは次のどれか？',
          choices: ['膝神経節', '顎下神経節', '耳神経節', '翼口蓋神経節'],
          answerImg: [],
          answer: '',
          commentary:
            '顎下神経節：舌下腺・顎下腺へ　翼口蓋神経節：涙腺・鼻腺へ　耳神経節：耳下腺などへ　膝神経節：内耳道にあり、顔面神経はここを通過する。',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: '前脳から発生するのは次のどれか？',
          choices: ['視床下部', '小脳', '延髄', '橋', '脊髄'],
          answerImg: [],
          answer: '',
          commentary:
            '前脳・中脳・菱脳という3つの神経管のふくらみ（脳胞）のうち、前脳は終脳と間脳に分岐し、菱脳は後脳と髄脳に分かれる。視床下部は間脳に属する。',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: '脳脊髄液の流れとして正しいのはどれか？',
          choices: [
            '脈絡叢ー側脳室ー第３脳室ー中脳水道ー第４脳室ー脳表ーくも膜顆粒',
            '脈絡叢ー側脳室ー中脳水道ー第３脳室ー第４脳室ー脳表ーくも膜顆粒',
            'くも膜顆粒ー側脳室ー第３脳室ー中脳水道ー第４脳室ー脳表ー脈絡叢',
            '脈絡叢ー第３脳室ー側脳室ー中脳水道ー第４脳室ー脳表ーくも膜顆粒',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '全体としては動脈→脳脊髄液→静脈の流れ。側脳室→第3脳室は室間孔（モンロー孔）、第3脳室→第4脳室は中脳水道がつなぐ。クモ膜顆粒から静脈洞に脊髄液が吸収される。',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: 'レンズ核を潅流する動脈は次のどれか？',
          choices: [
            '中大脳動脈',
            '前交通動脈',
            '前大脳動脈',
            '後交通動脈',
            '後大脳動脈',
          ],
          answerImg: [sentuusi],
          answer: '',
          commentary:
            'レンズ核線条体動脈は脳血管中心枝で穿通枝ともよばれる。動脈硬化の影響をもっとも受けやすい脳動脈。',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: '神経堤から発生するのは次のどれか？',
          choices: [
            'メラノサイト',
            '脊髄',
            'ランゲルハンス細胞',
            'ケラチノサイト',
            '副腎皮質',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '外胚葉から神経管が形成されるときの堤の部分の細胞群。メラノサイトのほか、神経節、副腎髄質など多彩な細胞へ分化する',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: '髄膜の中で最も頭蓋骨側に位置するのはどれか？',
          choices: ['硬膜', 'くも膜', '軟膜', '強膜', '莢膜'],
          answerImg: [],
          answer: '',
          commentary:
            '最外側（頭蓋骨側）を硬膜が覆い、その中（内外2枚の間）を硬膜静脈洞が流れる。その内側をくも膜、さらにくも膜下腔が構成し、最内側（脳側）を軟膜が覆う',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: 'ウィリス動脈輪を構成しない血管はどれか？',
          choices: ['脳底動脈', '前大脳動脈', '後交通動脈', '中大脳動脈'],
          answerImg: [willis],
          answer: '',
          commentary:
            'ウィリス動脈輪は下垂体と視交叉を取り囲む輪状の動脈群で、前交通動脈・前大脳動脈・後交通動脈・内頚動脈（中大脳動脈）・後大脳動脈で構成される?',
        },
        {
          detailInfo: '5/20',
          questionImg: [],
          questionSentence: '痛覚の伝導に関与するのはどれか？',
          choices: [
            '脊髄神経節',
            '上顎神経節',
            '毛様体神経節',
            '心臓神経節',
            '膀胱神経節',
          ],
          answerImg: [],
          answer: '',
          commentary: '体性求心性一次ニューロンは脊髄神経節に細胞体をもつ。',
        },
        {
          detailInfo: '5/20',
          questionImg: [],
          questionSentence: '温度覚を伝える伝導路で正しいのは次のどれか？',
          choices: [
            '脊髄神経節-脊髄後角-反対側前索-視床VPL核-大脳皮質感覚野',
            '脊髄神経節-脊髄前角-同側前索-視床VPL核-大脳皮質感覚野',
            '脊髄神経節-脊髄後角-同側後索-楔状束核-内側毛帯-視床VPL核-大脳皮質感覚野',
            '脊髄神経節-脊髄後角-反対側後索-楔状束核-小脳皮質',
            '脊髄神経節-脊髄前角-同側後索-楔状束核-内側毛帯-扁桃体',
          ],
          answerImg: [keiroMatome],
          answer: '',
          commentary:
            '温痛覚は外側脊髄視床路を通って大脳皮質（体性感覚野）に至る。末梢神経が脊髄に入った段階で中継し、すぐに交叉する。',
        },
        {
          detailInfo: '5/20',
          questionImg: [],
          questionSentence: '識別性触覚を伝える伝導路はどれか？',
          choices: [
            '後索-内側毛帯路',
            '外側脊髄視床路',
            '前脊髄視床路',
            '脊髄小脳路',
            '皮質脊髄路',
          ],
          answerImg: [keiroMatome],
          answer: '',
          commentary:
            '繊細な触圧核と深部感覚は延髄下部楔状束核で中継し延髄下部で交叉する後索-内側毛帯路を通り、大脳皮質（体性感覚野）に至る。',
        },
        {
          detailInfo: '5/25',
          questionImg: [],
          questionSentence: '大脳皮質左中心前回の障害で出る症状はどれか？',
          choices: [
            '右の運動麻痺',
            '右の感覚異常',
            '左の運動麻痺',
            '左の感覚異常',
            'いずれでもない',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '中心前回：一次運動野。外側皮質脊髄路を通り、延髄下部の錐体で交叉し病変の反対側に運動麻痺が出現する。',
        },
        {
          detailInfo: '5/25',
          questionImg: [],
          questionSentence:
            '56歳男性。指先をピタッと目標に止めることや、両手を同時に同じリズムで動かすことが困難となった。考えられる障害部位はどれか？',
          choices: ['小脳半球', '大脳皮質', '小脳虫部', '尾状核'],
          answerImg: [cerebellum],
          answer: '',
          commentary:
            '小脳半球（大脳小脳）は四肢の運動の調節・言語を担当する。　小脳虫部（脊髄小脳）は体幹の運動の調節（歩行・姿勢）を担当する。　前庭小脳（片葉小節葉）は平衡・眼球運動の調節を担当する。',
        },
        {
          detailInfo: '5/25',
          questionImg: [],
          questionSentence:
            '錐体部（皮質脊髄路）の障害で見られない所見はどれか？',
          choices: [
            '不随意運動',
            '腱反射亢進',
            'バビンスキー反射陽性',
            '筋緊張異常',
          ],
          answerImg: [attendance4],
          answer: '',
          commentary:
            '上位運動ニューロン障害（錐体路障害）では、運動の指令を伝える直接賦活経路とともに、過度の収縮を抑制する間接賦活経路も障害されるため、腱反射亢進・バビンスキー反射陽性・筋トーヌス亢進などがみられる。',
        },
        {
          detailInfo: '5/27',
          questionImg: [],
          questionSentence:
            '70歳女性、突然右上肢、下肢の麻痺と舌の運動障害を認めた。診断では舌を突き出すと舌は左に偏位した。この患者の舌の症状は以下のどの構造の異常からくるか？',
          choices: [
            '左舌下神経',
            '右舌下神経',
            '右舌咽神経',
            '左舌咽神経',
            '左迷走神経',
          ],
          answerImg: [CN12],
          answer: '',
          commentary:
            '舌の運動は全て舌下神経が支配する。大脳皮質→（左右で交叉）→延髄の舌下神経核→舌下神経→舌の経路のため、今回は同側の舌下神経が選ばれる。',
        },
        {
          detailInfo: '5/27',
          questionImg: [],
          questionSentence:
            '70歳女性、 突然右上肢、 下肢の麻痺と舌の運動障害を認めた。診察では右上下肢の筋 力低下、 右半身の固有感覚および触覚の低下が認められた。この患者の固有感覚、触覚の低下は以下のどの構造が障害されて起こっているか? ',
          choices: [
            '左内側毛帯',
            '右内側毛帯',
            '左外側脊髄視床路',
            '右外側脊髄視床路',
            'どれでもない',
          ],
          answerImg: [keiroMatome, crossSectionOfCNS],
          answer: '左内側毛帯？',
          commentary:
            '固有感覚：筋紡錘などからの意識できない感覚。意識できる触覚は後索→（左右で交叉）→逆側の内側毛帯を上行する経路で視床まで進む。固有感覚も一部この経路を通過する。',
        },
        {
          detailInfo: '5/27',
          questionImg: [brainStem],
          questionSentence:
            '中脳の中心部に出血が生じた。次のうち起こらない症状はどれか',
          choices: [
            '四肢麻痺',
            '意識障害',
            '感覚異常',
            '眼球運動異常',
            '視野障害',
          ],
          answerImg: [mesencephalon],
          answer: '',
          commentary:
            '皮質脊髄路（錐体路）の運動ニューロンの線維は大脳皮質→内包→大脳脚の中央部→橋縦束（橋腹側部）→錐体の経路を下行するため、出血部分を通過していない。',
        },
        // {
        //   detailInfo: '5/25',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ['', '', '', ''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2018各論',
      groupContents: [
        {
          detailInfo: '(1)',
          questionImg: [],
          questionSentence: 'Aortaについて誤っているものを選べ。',
          choices: [
            '重層扁平上皮である',
            '遠心性である',
            '内膜に弾性繊維が多く含まれる',
            '弾性型動脈である',
          ],
          answerImg: [],
          answer: '重層扁平上皮である',
          commentary:
            'Aorta（大動脈）は最も太い動脈で、全身に血液を送り出す（遠心性）本幹である。弾性動脈(elastic artery)とも呼ばれ、弾性繊維が平滑筋の量をしのぎ、板状の弾性繊維が何層も重なり、その間に平滑筋が入っている。血管の壁は毛細血管capillaryを除き3層構造で、内皮は単層の扁平な内皮細胞からなる。',
        },
        {
          detailInfo: '(2)',
          questionImg: [],
          questionSentence: 'Arterioleについて誤っているものを選べ。',
          choices: [
            '周皮細胞を持つ',
            '中膜に平滑筋を持つ',
            '抵抗血管と呼ばれる',
            '筋性動脈である',
          ],
          answerImg: [],
          answer: '',
          commentary:
            'Arteriole:細動脈。周皮細胞を持つのは毛細血管Capillaryと細静脈Venuleである。',
        },
        {
          detailInfo: '(3)',
          questionImg: [],
          questionSentence:
            'Postcapillary venuleについて誤っているものを選べ。',
          choices: [
            '内弾性板を持つ',
            '毛細血管と繋がる',
            'リンパ節の傍皮質に存在する',
            '高い内皮細胞を持つ',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '内・外弾性板が存在するのは筋性動脈以上の大きさの動脈である。',
        },
        {
          detailInfo: '(4)',
          questionImg: [],
          questionSentence: 'Endothelial cellについて誤っているものを選べ。',
          choices: [
            '消化管の内腔',
            '血液凝固に関係している',
            '血管とリンパ管の内膜',
            '周皮細胞と基底膜を共有する',
          ],
          answerImg: [],
          answer: '',
          commentary:
            'Endothelial cell:内皮細胞。消化管・気管・尿管など外界に開く管の内面を覆うのは上皮細胞Epitheliumである。',
        },
        {
          detailInfo: '(5)',
          questionImg: [],
          questionSentence: 'リンパ小節について誤っているものを選べ。',
          choices: [
            '一次リンパ小節はT細胞の集まりである',
            '皮質は辺縁洞に接する',
            '輸入リンパ管の方が輸出リンパ管より多い',
          ],
          answerImg: [],
          answer: '',
          commentary: '一次リンパ小節はB細胞の集まりである',
        },
        {
          detailInfo: '(6)',
          questionImg: [],
          questionSentence: '脾臓について、誤っているものを選べ。',
          choices: [
            '人体ではほぼ閉鎖循環系である',
            '脾洞は毛細血管である',
            '人体最大のリンパ組織だ',
            '脾索は細胞組織で構成される',
          ],
          answerImg: [spleen],
          answer:
            '人体ではほぼ閉鎖循環系である。/脾洞は毛細血管である（両方正解）',
          commentary:
            'さや動脈の先端は脾索内で開放性に終わり（開放循環）、血液は脾索の細胞組織内をゆっくり流れて脾洞へ向かう。※脾洞は毛細血管とするものと、細静脈が特殊化したものとする記述が両方あったため、これも正解となった',
        },
        {
          detailInfo: '(8)',
          questionImg: [],
          questionSentence: '骨髄について、誤っているものを選べ。',
          choices: [
            '2次リンパ性器官だ',
            '青年期以降、赤色髄質から黄色髄質になる',
            '洞様毛細血管がある',
            '赤芽球が島をつくる',
          ],
          answerImg: [marrow],
          answer: '',
          commentary:
            '骨髄は胸腺と同様、リンパ球が発生・分化する一次リンパ器官である。また、成長につれ体幹部の一部の骨（胸骨など）を除き赤色髄質から黄色髄質になる。',
        },
        {
          detailInfo: '(9)',
          questionImg: [],
          questionSentence: '鼻腔について誤っているものを選べ。',
          choices: [
            '鼻前庭は匂いを甘受するところである',
            '鼻腔の嗅部は多列線毛上皮である',
            '多列線毛上皮である',
            '鼻前庭は重層円柱上皮である',
          ],
          answerImg: [],
          answer: '',
          commentary: 'においを甘受するのは嗅部である',
        },
        {
          detailInfo: '(11)',
          questionImg: [],
          questionSentence: 'Tracheaについて誤っているものを選べ。',
          choices: [
            '非角化重層扁平上皮である',
            '食道の前に憩室が発生する',
            '外膜に気管軟骨をもつ',
            '固有腺をもつ',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '気管Tracheaは多列線毛上皮。非角化重層扁平上皮は食道Esophagusである',
        },
        {
          detailInfo: '(12)',
          questionImg: [],
          questionSentence: 'クララ細胞について誤っているものを選べ。',
          choices: [
            '線毛がある',
            'Bronchioleの上皮細胞に存在する',
            'サーファクタントを分泌する',
            '丈の高い細胞である',
          ],
          answerImg: [bronchiole],
          answer: '',
          commentary: 'クララ細胞は線毛を持たない',
        },
        {
          detailInfo: '(13)',
          questionImg: [],
          questionSentence: '肺胞について誤っているものを選べ。',
          choices: [
            '重層扁平上皮を持つ',
            '2型が大きい球状の細胞を持つ',
            '1型が95%を占める',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '肺胞は単層扁平上皮。呼吸器系の上皮は形態は変われどすべて単層上皮である',
        },
        {
          detailInfo: '(16)',
          questionImg: [],
          questionSentence: '消化管について誤っているものを選べ。',
          choices: [
            'アウエルバッハ神経叢は粘膜下層にある',
            '内腔が上皮で覆われている',
            '粘膜筋板は粘膜固有層と粘膜下層をわける',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '粘膜下層に存在するのはマイスネル神経叢。アウエルバッハ神経叢は筋間にある',
        },
        {
          detailInfo: '(17)',
          questionImg: [],
          questionSentence: '次のうち誤っているものを選べ。',
          choices: [
            '上皮は内皮へ移行する',
            '消化管の内面は上皮',
            '皮膚は表皮',
            '血管の内面は内皮',
          ],
          answerImg: [],
          answer: '',
          commentary: '上皮と移行するのは表皮である。',
        },
        {
          detailInfo: '(18)',
          questionImg: [],
          questionSentence: '食道について誤っているものを選べ。',
          choices: [
            '粘膜固有層が発達している',
            '非角化重層扁平上皮である',
            '上部1/3は横紋筋である',
            '漿膜がない',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '食道の粘膜固有層は発達がわるい。代わりに粘膜下層が発達している',
        },
        {
          detailInfo: '(19)',
          questionImg: [],
          questionSentence: '固有胃腺について誤っているものを選べ。',
          choices: [
            '壁細胞は好塩基性である',
            '表層上皮細胞はムチンと重炭酸塩を分泌する',
            '頚部の粘液分泌細胞は副細胞である',
            '主細胞はゴルジ装置と粗面小胞体が発達している',
          ],
          answerImg: [gastricGland],
          answer: '',
          commentary: '壁細胞は好酸性。固有胃腺で好塩基性なのは主細胞である',
        },
        {
          detailInfo: '(20)',
          questionImg: [],
          questionSentence: '小腸について誤っているものを選べ。',
          choices: [
            '筋層は半月ヒダを形成する',
            '吸収上皮細胞は微絨毛を持つ',
            '粘膜固有層は繊毛を形成する',
            '粘膜筋板は輪状ヒダを形成する',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '半月ヒダは筋層により形成された結腸膨起の間を境ずるものであり、筋層によるものといえるが小腸には存在しない。小腸に存在するのは輪状ヒダである。',
        },
        {
          detailInfo: '(21)',
          questionImg: [],
          questionSentence: 'パネート細胞について誤っているものを選べ。',
          choices: [
            '小腸より大腸で発達している',
            'デフェンシンを分泌する',
            '好酸性の顆粒を持つ',
            '陰窩の底部に存在している',
          ],
          answerImg: [],
          answer: '',
          commentary:
            'パネート細胞は小腸にしか存在しない（特に空腸に多い）。小腸より大腸で発達しているのは杯細胞',
        },
        {
          detailInfo: '(22)',
          questionImg: [],
          questionSentence: '小腸の吸収上皮細胞について誤っているものを選べ。',
          choices: [
            'ムチノーゲンを分泌する',
            '小腸の上皮細胞で一番多い',
            'Junction complexで結合する',
            '陰窩の底部にも存在する',
          ],
          answerImg: [],
          answer: '',
          commentary:
            'ムチノーゲンを分泌するのは杯細胞である。吸収上皮細胞は何も分泌しない',
        },
        {
          detailInfo: '(23)',
          questionImg: [],
          questionSentence: '小腸のM細胞について誤っているものを選べ。',
          choices: [
            '微絨毛が発達している',
            '内腔の高原を貪食して固有層へ抗原提示',
            '腸内免疫の主役',
            'パイエル板の表層の上皮に存在',
          ],
          answerImg: [],
          answer: '',
          commentary: 'M細胞は微絨毛に乏しく、微小ヒダをもつ。',
        },
        {
          detailInfo: '(24)',
          questionImg: [],
          questionSentence: '小腸組織について誤っているものを選べ。',
          choices: [
            '腸腺以外で固有腺があるのは空腸だけである',
            '杯細胞はすべての小腸上皮に存在する',
            'すべての小腸にはリンパ小節が存在する',
            'すべての小腸では絨毛が発達している',
          ],
          answerImg: [],
          answer: '',
          commentary: '固有線があるのは十二指腸だけである。',
        },
        {
          detailInfo: '(25)',
          questionImg: [],
          questionSentence: '十二指腸腺について誤っているものを選べ。',
          choices: [
            'リーベルキューン腺とも呼ばれる',
            'おもに粘膜下層にあり、陰窩に開口する',
            '粘液線である',
            'ウロガストロンを分泌する',
          ],
          answerImg: [],
          answer: '',
          commentary:
            'リーベルキューン腺とも呼ばれるのは腸腺。十二指腸腺はブルンネル腺である。',
        },
        {
          detailInfo: '(26)',
          questionImg: [],
          questionSentence: '結腸について誤っているものを選べ。',
          choices: [
            '杯細胞よりパネート細胞が発達している',
            '輪状ひだはないが半月ひだがある',
            '筋層の外縦筋を結腸ひもと呼ぶ',
            '漿膜が伸びだして脂肪が入り、腹膜垂を作る',
          ],
          answerImg: [],
          answer: '',
          commentary:
            'パネート細胞は小腸にしか存在しない(特に空腸に存在)。小腸より大腸で発達しているのは杯細胞。',
        },
        {
          detailInfo: '(27)',
          questionImg: [],
          questionSentence: '肝小葉について誤っているものを選べ。',
          choices: [
            'その中心に中心動脈がある',
            '基本的に六角形の構造である',
            '血管は中心に向かって流れる',
            '胆汁は毛細胆管に集まる',
          ],
          answerImg: [hepaticLobule],
          answer: '',
          commentary: '肝小葉の中心に存在するのは中心静脈である。',
        },
        {
          detailInfo: '(29)',
          questionImg: [],
          questionSentence: '肝臓について誤っているものを選べ。',
          choices: [
            'クッパー細胞はディッセ腔内にある',
            '伊東細胞はディッセ腔内にある',
            ' 伊東細胞は肝障害によりコラーゲンを産生する',
            'クッパー細胞は肝臓のマクロファージである',
          ],
          answerImg: [liver],
          answer: '',
          commentary:
            'クッパー細胞が存在するのは類洞内である。ここには免疫細胞としてピット細胞も存在する。',
        },
        {
          detailInfo: '(30)',
          questionImg: [],
          questionSentence: '肝臓の小葉間組織について',
          choices: [
            '中心静脈が通る',
            'グリソン鞘という',
            '単層立方上皮である小葉間胆管が通る',
            'アザン染色で青に染まる',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '中心静脈が通るのは肝小葉の中心であり、小葉間組織に通る静脈は小葉間静脈。',
        },
        {
          detailInfo: '(31)',
          questionImg: [],
          questionSentence: '膵臓について誤っているものを選べ。',
          choices: [
            '筋上皮細胞をもつ',
            '中心腺房細胞が発達する',
            '線条部導管をもたない',
            'エオジン好染',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '膵臓の外分泌部は筋上皮細胞をもたない。このほかに、問題の通り線条部導管も持たない',
        },
        {
          detailInfo: '(32)',
          questionImg: [],
          questionSentence: '原始卵胞について誤っているものを選べ。',
          choices: [
            'その周りを発達した卵胞膜が取り囲む',
            '新生児に多く見られる',
            '基底膜は卵胞上皮細胞の外側にある',
            '単層の扁平な卵胞上皮細胞に包まれる',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '原始卵胞を取り囲むのは卵胞上皮細胞と基底膜である。卵胞膜が取り囲むようになるのは一次卵胞になってから。',
        },
        {
          detailInfo: '(33)',
          questionImg: [],
          questionSentence:
            '卵母細胞(グラーフ細胞)について誤っているものを選べ。',
          choices: [
            '放出されるのは卵子細胞である',
            '卵胞に含まれるのは全て一次卵母細胞である',
            '放線冠と透明層はくっついている',
            '',
          ],
          answerImg: [],
          answer: '',
          commentary:
            'グラーフ卵胞から放出されるのは二次卵母細胞で、それが受精して初めて卵子となる(卵子細胞という言葉は厳密にはないようである)。',
        },
        {
          detailInfo: '(37)',
          questionImg: [],
          questionSentence: '胎盤について誤っているものを選べ。',
          choices: [
            '絨毛内部に母体の血液が入っている',
            '受精卵が栄養膜と内細胞塊に分化',
            '栄養膜が胎盤になる',
            '栄養膜には合胞体性と細胞性がある',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '絨毛は胎児側に形成され、基底脱落膜まで流れる母体の血液は胎盤膜を隔てて胎児の血液と混じらないようになっている。',
        },
        {
          detailInfo: '(38)',
          questionImg: [],
          questionSentence: '大人の曲精細管について誤っているものを選べ。',
          choices: [
            '単層扁平上皮である',
            '精上皮と呼ばれる',
            '基底膜に囲まれている',
            '筋上皮細胞が存在する',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '曲精細管は重層上皮。そもそも男性生殖器系で単層扁平上皮である組織は存在しない。',
        },
        {
          detailInfo: '(39)',
          questionImg: [],
          questionSentence: 'セルトリ細胞について誤っているものを選べ。',
          choices: [
            '基底膜に接していない',
            '貪食能を持つ',
            'tight junction により、管腔内を基底区画と傍腔区画に分けられる',
            '円柱状の細胞で、大きな核小体をもつ',
          ],
          answerImg: [],
          answer: '',
          commentary: 'セルトリ細胞は基底膜に接している。',
        },
        {
          detailInfo: '(40)',
          questionImg: [],
          questionSentence: '精路について誤っているものを選べ。',
          choices: [
            '精巣輸出管は単一の管である',
            '精巣上体管は不動毛を持つ',
            '精管の筋層は内縦、中輪、外縦の 3 層からなる',
            '精管は休止状態の精子を数週間貯蔵する',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '精巣輸出管は 12 本くらいの管である。単一の管であるのは精巣上体管以降。',
        },
        {
          detailInfo: '(41)',
          questionImg: [],
          questionSentence: '腎臓のメサンギウムについて誤っているものを選べ。',
          choices: [
            'PAS 染色に陰性である',
            '特殊な結合組織を意味する',
            'メサンギウム細胞とその基質からなる',
            '糸球体内、外に存在する',
          ],
          answerImg: [],
          answer: '',
          commentary: 'PAS 染色に陽性である。',
        },
        {
          detailInfo: '(42)',
          questionImg: [],
          questionSentence: '傍糸球体装置について誤っているものを選べ。',
          choices: [
            '緻密斑は近位尿細管に存在する',
            '血管極に存在する',
            'グールマーティ細胞は PAS 染色陽性である',
            '傍糸球体細胞は輸入細動脈の平滑筋由来である',
          ],
          answerImg: [],
          answer: '',
          commentary: '緻密斑は遠位尿細管の一部の上皮が分化したものである。',
        },
        {
          detailInfo: '(43)',
          questionImg: [],
          questionSentence: '尿細菅の上皮について誤っているものを選べ。',
          choices: [
            '基底線条は遠位尿細菅で発達している',
            '最も扁平なのは中間尿細菅',
            '細胞質が明るく細胞境界が鮮明なのは集合菅',
            '刷子縁を持つのは近位尿細菅',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '遠位尿細管は基底線条に乏しく、近位尿細管ではわかりやすい。',
        },
        {
          detailInfo: '(45)',
          questionImg: [],
          questionSentence: '内分泌腺について誤っているものを選べ。',
          choices: [
            '導管をもつ',
            'もともと上皮由来である',
            '毛細血管が発達する',
            'ホルモンを産生する',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '内分泌腺は導管を持たない。毛細血管が発達し血行性で標的器官へホルモンを分泌する。',
        },
        {
          detailInfo: '(46)',
          questionImg: [],
          questionSentence: '下垂体前葉について誤っているものを選べ。',
          choices: [
            '神経性下垂体と呼ばれる',
            '酸好性の成長ホルモン分泌細胞が多く存在する',
            '色素嫌性の細胞は副腎皮質刺激ホルモンを分泌する',
            '毛細血管は遊窓性である',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '下垂体前葉は腺性下垂体。後葉が神経性下垂体(cf.下垂体の発生)。',
        },
        {
          detailInfo: '(48)',
          questionImg: [],
          questionSentence: '副腎皮質について誤っているものを選べ。',
          choices: [
            'クロム親和性細胞が配列する',
            '球状層、束状層、網状層の 3 層に区分される',
            '中胚葉由来である',
            '洞様毛細血管が発達する',
          ],
          answerImg: [adrenalGland],
          answer: '',
          commentary:
            'クロム親和性細胞が配列するのは副腎髄質。このほかにも胃腸などにもクロム親和性細胞が存在する(ex:EC 細胞、ECL 細胞)。',
        },
        {
          detailInfo: '(49)',
          questionImg: [],
          questionSentence: '副腎髄質について誤っているものを選べ。',
          choices: [
            '輪層筋がなす中心動脈をもつ',
            '神経節細胞がある',
            '外胚葉由来である',
            'アドレナリンを分泌する',
          ],
          answerImg: [adrenalGland],
          answer: '',
          commentary: '副腎髄質の中心静脈はすべて縦走筋からなる。',
        },
        {
          detailInfo: '(50)',
          questionImg: [],
          questionSentence: '膵臓内分泌部について誤っているものを選べ。',
          choices: [
            'A 細胞はインスリンを分泌する',
            'ランゲルハンス島という',
            'B 細胞が全体の 60〜70%を占めている',
            'B 細胞が中心に存在する',
          ],
          answerImg: [],
          answer: '',
          commentary:
            'A 細胞が分泌するのはグルカゴン。インスリンは B 細胞が分泌する。',
        },
        {
          detailInfo: '大問2',
          questionImg: [],
          questionSentence: '脾臓について血管構造を明らかにしつつ説明せよ。',
          answerImg: [spleen],
          answer: '準備中',
          commentary: '',
        },
        {
          detailInfo: '大問3',
          questionImg: [],
          questionSentence: '血液尿関門について説明せよ。',
          answerImg: [bloodUrineBarrier],
          answer: '準備中',
          commentary: '',
        },
      ],
    },
    {
      groupTag: '2020本',
      groupContents: [
        {
          detailInfo: '大問1(1)',
          questionImg: [],
          questionSentence: '洞様毛細血管について、その構造を説明しなさい。',
          answerImg: [ans2],
          answer:
            '洞様毛細血管は一般の毛細血管よりはるかに太く、血管壁には大小の窓が空いている。',
          commentary:
            '（肝臓：）小葉内には肝細胞索の間を洞様毛細血管（類洞）が流れ、小葉中心の中心静脈へ向かう。小さい窓は100nm以下、大きい窓は径1～3μm程度。内皮細胞のところどころではクッパー細胞という、異物を貪食して処理する細胞がある。内皮と無数の微絨毛をもつ肝細胞との間をディッセ腔という。ここには伊藤の脂肪摂取細胞があり、ビタミンAを取り込み、膠原繊維を作っている。',
        },
        {
          detailInfo: '大問1(2)',
          questionImg: [],
          questionSentence:
            '洞様毛細血管を持つ臓器を一つ選び、その臓器の組織構造を図示して説明しなさい。(図中には洞様毛細血管を含むこと)',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問2(1)',
          questionImg: [],
          questionSentence:
            '肺胞を構成する2種類の細胞について、その名称と細胞の特徴を答えなさい。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問2(2)',
          questionImg: [],
          questionSentence: '血液空気関門について、図示して説明しなさい。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問3(1)',
          questionImg: [],
          questionSentence:
            '小腸の粘膜上皮を構成する細胞を全て挙げ、それぞれについて説明しなさい。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問3(2)',
          questionImg: [imageSample1],
          questionSentence:
            'これは小腸粘膜上皮を構成する細胞の電子顕微鏡写真である。細胞面を答え、この写真を説明しなさい。',
          answerImg: [imageSample2],
          answer:
            '小腸粘膜上皮では...........................................................................................................................',
          commentary: 'くわしい解説',
        },
      ],
    },
    {
      groupTag: '反転授業',
      groupContents: [
        {
          detailInfo: '症例1',
          questionImg: [],
          questionSentence:
            '70歳の女性が突然、右上肢、下肢の麻痺と舌の運動障害を認めた。 発症数時間後に救急外来で診察を受けたところ、右上下肢の筋力低下、右半身の固有感覚及び識別性触覚の低下が認められた。また舌を 突き出してもらうと舌は左側に偏位した。それぞれの症状を起こしている原因となる解剖学的構造を推測してみて下さい。',
          answerImg: [thalamusSyndrome, crossSectionOfCNS],
          answer: 'Dejerine症候群（延髄左内側の障害）',
          commentary:
            '舌の左側に運動障害がみられるので延髄付近の中枢神経に異常があると推測できる（延髄より上だと舌の右側、下だと舌に障害がみられない）。Wallenberg症候群（延髄外側の障害）でみられる温痛覚障害・Horner症候群などが生じていないことから、これ以外の延髄内側の部分で障害が起こっていると推測できる。脳底動脈の傍正中枝の閉塞が原因',
        },
        {
          detailInfo: '症例2',
          questionImg: [],
          questionSentence:
            '60歳男性、心筋梗塞を起こした5日後に左側を見ると物が2重に見え、また右手を使いにくい と突然訴えるようになった。 脳神経系の検査で左外直筋麻痺が認められた。 発語が少し不明瞭 で、左側の鼻唇溝は右に比較して浅い。 左眼を強く閉じることが出来ず、 左側の眉毛を挙上 させようとしても右側ほど充分に出来なかった。 顔面の感覚全般と味覚は正常であった。 四肢の検査では右上下肢に筋力の低下が認められ、 右側のバビンスキー反射が陽性であった。 位置覚と振動覚の消失が右上下肢に認められた。',
          answerImg: [],
          answer:
            'Millard-Gubler (ミヤールーギュブレール) 症候群、橋下部腹側症候群 外転神経麻痺と顔面神経麻痺が同時に出現するのが特徴',
          commentary: '橋の部分で',
        },
        {
          detailInfo: '症例3',
          questionImg: [],
          questionSentence:
            'これまで健康であった50歳男性が6ヶ月前から物を飲み込みにくい、水を飲むときに気管に入って むせるというような症状が現れてきた。 約3ヶ月前から声が徐々にかすれてきて、右肩を挙上 することが困難になってきた。神経内科を受診し、診察を受けたところ以下のような所見が得られた。　1) 右軟口蓋の下垂があり、 右の咽頭を刺激しても軟口蓋は挙上せず、 患者は咽頭に刺激を 加えられたかどうかも分からないと述べた。 反対側の咽頭は刺激すると挙上した。　2) 喉頭をファイバースコープで観察すると発生時の右の声帯の動きが認められなかった。　3)右の僧帽筋と胸鎖乳突筋の筋力低下、 及び筋萎縮が認められた。　どの脳神経に異常があるか (複数です) ? また、 全ての症状及び経過を一元的に解釈出来る病変とは? (これは少し難しいです)',
          answerImg: [CN11, CN10],
          answer: '右頚静脈孔の異常？',
          commentary:
            '右迷走神経（咽頭・喉頭障害）、右副神経（僧帽筋・胸鎖乳突筋障害）の異常がみられる。これらの脳神経はいずれも頚静脈孔を通る',
        },
        {
          detailInfo: '症例4',
          questionImg: [],
          questionSentence:
            '72歳女性、 朝起きると左半身が動かせない (上肢、下肢共に) ことに気付いた。家人の助けを借りてベッドから起床したが、 物が2重に見え、まぶしいと訴える。家人が患者の顔を正面から見ると、 右の上眼瞼が下がっており、 左眼は正面 を向いているのに右眼は下外側を向いた状態となっていることに気付いた。救急外来に運ばれ、診察を受けた結果、 左半身の片麻痺、 右動眼神経の麻痺 であると診断された。診断はついたが、 この患者さんは脳のどの部分に障害が起きているのだろうか?',
          answerImg: [nidusAVM, complexParalyzedCN, pyramidalTract],
          answer: '脳動静脈奇形AVMによる複合神経麻痺？',
          commentary:
            '脳動脈瘤奇形AVMにより脳の一部が損傷しており、右動眼神経麻痺、左半身片麻痺はいずれも視床付近の狭い範囲を通過している神経の障害で起こる',
        },
        // {
        //   detailInfo:'症例1',
        //   questionImg:[],
        //   questionSentence:'70歳の女性が突然、右上肢、下肢の麻痺と舌の運動障害を認めた。 発症数時間後に救急外来で診察を受けたところ、右上下肢の筋力低下、右半身の固有感覚及び識別性触覚の低下が認められた。また舌を 突き出してもらうと舌は左側に偏位した。それぞれの症状を起こしている原因となる解剖学的構造を推測してみて下さい。',
        //   answerImg:[],
        //   answer:'準備中',
        //   commentary:'',
        // },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
  }
}
