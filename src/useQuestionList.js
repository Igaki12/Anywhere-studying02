import { useState } from 'react'
import imageSample1 from './img/question/sample.png'
// import imageSample2 from './img/answer/sampleAnswer.JPG'
// import ans2 from './img/answer/DSC_0188.JPG'
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
import intestine from './img/answer/intestine.png'
import centralMotorNeuron from './img/answer/centralMotorNeuron.png'
import MillaredGubler from './img/answer/Millared-Gubler.png'
import alveolus from './img/answer/alveolus.png'
import BloodAir from './img/answer/BloodAir.png'
import capillary from './img/answer/capillary.png'
import lipidInIntestine from './img/answer/lipidInIntestine.png'
import sinusoid from './img/answer/sinusoid.png'
import JGA from './img/answer/JGA.png'
import placenta from './img/answer/placenta.png'
import testis from './img/answer/testis.png'
import renalTubule from './img/answer/renalTubule.png'
import pancreasTissue from './img/answer/pancreasTissue.png'
import follicle2 from './img/answer/follicle2.png'
import releasedFollicle from './img/answer/releasedFollicle.png'
import spinalDisorder from './img/answer/spinalDisorder.png'
import sensoryDisorder from './img/answer/sensoryDisorder.png'
import subduralHematoma from './img/answer/subduralHematoma.png'
import BrownSequard from './img/answer/Brown-Sequard.png'
import cerebellum220601 from './img/question/220601cerebellum.png'
import spinalCord220601 from './img/question/220601spinalCord.png'
import lymphNode220607 from './img/question/220607lymphNode.png'
import lymphNode from './img/answer/lymphNode.png'
import exocrineEndocrine from './img/answer/exocrineEndocrine.png'
import salivaryGland from './img/answer/salivaryGland.png'
import microvilli from './img/answer/microvilli.png'
import anteriorPituitaryH from './img/answer/anteriorPituitaryH.png'
import kidneyCorpuscle from './img/answer/kidneyCorpuscle.png'
import thymus from './img/answer/thymus.png'
import adrenalGlandTEM from './img/question/adrenalGlandTEM.png'
import ECjunction from './img/answer/ECjunction.png'
import LeydigCellTEM from './img/question/LeydigCellTEM.png'
import medullaTEM from './img/question/medullaTEM.png'
import placentaTEM from './img/question/placentaTEM.png'
import capillaryTEM from './img/question/capillaryTEM.png'
import capillaryTEM2 from './img/question/capillaryTEM2.png'
import chiefTEM from './img/question/chiefTEM.png'
import marrowSEM from './img/question/marrowSEM.png'
import mucousNeckTEM from './img/question/mucousNeckTEM.png'
import panethTEM from './img/question/panethTEM.png'
import parietalTEM from './img/question/parietalTEM.png'
import pericyteTEM from './img/question/pericyteTEM.png'
import spleenSEM from './img/question/spleenSEM.png'
import surfaceMucousTEM from './img/question/surfaceMucousTEM.png'
import villiSEM from './img/question/villiSEM.png'
import stomachSEM from './img/question/stomachSEM.png'
import peyersPatchSEM from './img/question/peyersPatchSEM.png'
import MCellSEM from './img/question/MCellSEM.png'
import tracheaTEM from './img/question/tracheaSEM.png'
import claraSEMTEM from './img/question/claraSEMTEM.png'
import alveolarSEM from './img/question/alveolarSEM.png'
import trachea from './img/answer/trachea.png'
import BTBarrierTEM from './img/question/BTBarrierTEM.png'
import follicleTEM from './img/question/follicleTEM.png'
import glomerularCapillaryTEM from './img/question/glomerularCapillaryTEM.png'
import hypophysisTEM1 from './img/question/hypophysisTEM1.png'
import hypophysisTEM2 from './img/question/hypophysisTEM2.png'
import interMediateTubuleTEM from './img/question/InterMediateTubuleTEM.png'
import mesangialTEM from './img/question/mesangialTEM.png'
import ovaryTEM from './img/question/ovaryTEM.png'
import oviductSEM from './img/question/oviductSEM.png'
import oviductTEM from './img/question/oviductTEM.png'
import pancreasATEM from './img/question/pancreasATEM.png'
import pancreasBTEM from './img/question/pancreasBTEM.png'
import podocyteSEM from './img/question/podocyteSEM.png'
import proximalTubuleTEM from './img/question/proximalTubuleTEM.png'
import thyroidSEM from './img/question/thyroidSEM.png'
import thyroidTEM from './img/question/thyroidTEM.png'
import anteriorPituitaryE from './img/answer/anteriorPituitaryE.png'

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
        {
          detailInfo: '5/30反転イントロ',
          questionImg: [],
          questionSentence: '三叉神経の支配を受けるのはどれか。',
          choices: ['側頭筋', '前頭筋', '眼輪筋', '口輪筋', '広頚筋'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '5/30反転イントロ',
          questionImg: [],
          questionSentence: '副交感神経を含むものを次から３つ選べ。',
          choices: ['顔面神経', '迷走神経', '動眼神経', '三叉神経', '舌下神経'],
          answerImg: [],
          answer: '顔面神経・迷走神経・動眼神経',
          commentary: '',
        },
        {
          detailInfo: '6/1',
          questionImg: [],
          questionSentence:
            '78歳の女性。 脳梗塞の診断で集中治療室に入院となった。 開眼しているが質問に対しては、 「私どうしたの? ここはどこ? ごはんの準備をしなくっちゃ」など会 話は成立しない。 「手を握ってください」と言うと右手は握るが左手は握らない。 GCSを使って意識レベルを評価して ください。',
          answerImg: [],
          answer: '答え: GCS E4 V4M6 合計14点',
          commentary:
            'Glasgow Coma Scaleを用いた実際の意識レベルの評価。VとMは最も良かった項目(best)で判定',
        },
        {
          detailInfo: '6/2',
          questionImg: [],
          questionSentence:
            '血管構造3層構造のうち、筋型動脈と弾性型動脈で最も異なっているのはどの層か？',
          answerImg: [],
          answer: '中膜',
          commentary:
            'Tunica media。弾性型動脈では弾性繊維Elastic fiberが豊富であるが、筋型動脈では平滑筋細胞で占められている。',
        },
        {
          detailInfo: '6/2',
          questionImg: [],
          questionSentence: '静脈の三層構造で縦走の平滑筋が最もみられる膜は？',
          answerImg: [],
          answer: '外膜',
          commentary:
            '輪走平滑筋は中膜Tunica mediaにみられる。縦走平滑筋が外膜Tunica externaと一部内膜Tunica internaにみられ、起立時に心臓より下に位置する静脈で特に発達している。',
        },
        {
          detailInfo: '6/7',
          questionImg: [lymphNode220607],
          questionSentence: '図（リンパ節傍皮質）の赤矢印が示す細胞の名称は？',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: 'マクロファージ',
          commentary: '青矢印は細網細胞、緑矢印はリンパ球',
        },
        {
          detailInfo: '6/7',
          questionImg: [],
          questionSentence:
            '末梢血中のリンパ球はどの血管から二次リンパ器官に入る？',
          choices: ['post-capillary venule', 'capillary', 'arteriole', 'vein'],
          answerImg: [lymphNode],
          answer: '',
          commentary:
            '毛細血管後細静脈Post capillary venuleはリンパ節の傍皮質にある',
        },
        {
          detailInfo: '6/7',
          questionImg: [],
          questionSentence: 'HE染色で車軸状に染まる特徴的な核を持つ細胞は？',
          choices: ['形質細胞', '内皮細胞', 'T細胞', '細網細胞'],
          answerImg: [],
          answer: '',
          commentary:
            '形質細胞はB細胞が抗原提示を受けて分化する。リンパ節の髄質に存在する。',
        },
        {
          detailInfo: '6/7',
          questionImg: [],
          questionSentence: '脾臓の血管系で正しいのはどれ？',
          choices: [
            '脾柱動脈→中心動脈→筆毛動脈→莢動脈→脾洞→脾柱静脈',
            '脾柱動脈→中心動脈→筆毛動脈→脾洞→莢動脈→脾柱静脈',
            '脾柱動脈→中心動脈→脾洞→筆毛動脈→莢動脈→脾柱静脈',
            '脾柱動脈→脾洞→中心動脈→筆毛動脈→莢動脈→脾柱静脈',
          ],
          answerImg: [spleen],
          answer: '',
          commentary:
            '中心動脈・筆毛動脈は白脾髄に、莢（さや）動脈・脾洞は赤脾髄に存在する。',
        },
        {
          detailInfo: '6/7',
          questionImg: [],
          questionSentence: '脾臓の赤脾髄内にあるものを二つ選びなさい。',
          choices: ['脾索', '脾洞', '中心動脈', '脾小節', '筆毛動脈'],
          answerImg: [spleen],
          answer: '脾洞・脾索',
          commentary: '赤脾髄内には他に莢動脈が含まれる。',
        },

        {
          detailInfo: '6/7',
          questionImg: [],
          questionSentence:
            '胃を構成する細胞で、酸を分泌する細胞の名前を答えなさい。',
          // choices: ['', '', '', ''],
          answerImg: [gastricGland],
          answer: '壁細胞',
          commentary: '壁細胞はミトコンドリアが豊富で、エオジンに強く染まる。',
        },

        {
          detailInfo: '6/8(1)',
          questionImg: [],
          questionSentence: '腺の由来は？',
          answerImg: [exocrineEndocrine],
          answer: '上皮組織',
          commentary: '',
          choices: [
            '結合組織',

            '神経組織',

            '上皮組織',

            '筋組織',

            'どれでもない',
          ],
        },
        {
          detailInfo: '6/8(2)',
          questionImg: [],
          questionSentence: '腺構造で、小葉内にあるもの二つ選びなさい。',
          answerImg: [salivaryGland],
          answer: '線条部導管、介在部導管',
          commentary: '小葉内部に存在するのは動脈ではなく毛細血管',
          choices: [
            '小葉間導管',

            '動脈',

            '介在部導管',

            '小葉間結合組織',

            '線条部導管',
          ],
        },
        {
          detailInfo: '6/8(3)',
          questionImg: [],
          questionSentence: 'エオジンに好染するものを選びなさい。',
          answerImg: [],
          answer: '線条部導管',
          commentary: '基底線条に豊富なミトコンドリアがエオジンに良く染まる',
          choices: ['粘液細胞', '筋上皮細胞', '介在部導管', '線条部導管'],
        },
        {
          detailInfo: '6/8(4)',
          questionImg: [],
          questionSentence:
            '消化管の基本組織構造（内腔側から）で、正しいものを選びなさい',
          answerImg: [],
          answer: '粘膜上皮→粘膜固有層→粘膜筋板→粘膜下組織→輪走筋→縦走筋→漿膜',
          commentary: '',
          choices: [
            '粘膜上皮→粘膜固有層→粘膜筋板→粘膜下組織→輪走筋→縦走筋→漿膜',

            '粘膜上皮→粘膜固有層→粘膜筋板→粘膜下組織→縦走筋→輪走筋→漿膜',

            '粘膜上皮→粘膜固有層→粘膜下組織→粘膜筋板→輪走筋→縦走筋→漿膜',

            '粘膜上皮→粘膜固有層→粘膜筋板→輪走筋→粘膜下組織→縦走筋→漿膜',

            '粘膜上皮→粘膜下組織→粘膜固有層→粘膜筋板→輪走筋→縦走筋→漿膜',
          ],
        },
        {
          detailInfo: '6/8(5)',
          questionImg: [],
          questionSentence:
            '胃腺を構成する細胞で間違っているものを選びなさい。',
          answerImg: [gastricGland],
          answer: '副細胞=goblet cell',
          commentary: 'goblet cellは杯細胞。',
          choices: [
            '主細胞=chief cell',

            '表層上皮細胞=surface mucous cell',

            '副細胞=goblet cell',

            '壁細胞=parietal cell',
          ],
        },
        {
          detailInfo: '6/8(6)',
          questionImg: [],
          questionSentence: '好酸性の細胞を選びなさい。',
          answerImg: [gastricGland],
          answer: 'parietal cell',
          commentary: '壁細胞はミトコンドリアが豊富で、エオジン好染＝好酸性',
          choices: [
            'chief cell',

            'surface mucous cell',

            'goblet cell',

            'parietal cell',

            'mucous neck cell',
          ],
        },
        {
          detailInfo: '6/8(7)',
          questionImg: [],
          questionSentence:
            '小腸の粘膜上皮を構成する細胞のうち、好酸性であるものを選びなさい。',
          answerImg: [intestine],
          answer: 'Paneth cell',
          commentary:
            'パネート細胞Paneth cell、杯細胞Goblet cell、吸収上皮細胞Absorptive epithelial cell。パネート細胞はリソソームが豊富で好酸性。',
          choices: [
            'Goblet cell',
            'Paneth cell ',
            'M cell',
            'Absorptive epithelial cell',
          ],
        },
        {
          detailInfo: '6/8(8)',
          questionImg: [],
          questionSentence:
            '小腸の粘膜上皮を構成する細胞のうち、腸管免疫を司るものを選びなさい。',
          answerImg: [intestine],
          answer: '',
          commentary: 'M cell',
          choices: [
            'Goblet cell',
            'Paneth cell',
            'M cell',
            'Absorptive epithelial cell',
          ],
        },
        {
          detailInfo: '6/8(9)',
          questionImg: [],
          questionSentence: '大腸に無いものはどれ？',
          answerImg: [intestine],
          answer: '輪状ヒダ',
          commentary: '腸腺（リーベルキューン線）は小腸・大腸ともにある。',
          choices: ['輪状ヒダ', '粘膜上皮', '腸腺', 'Goblet cell', '結腸ヒモ'],
        },
        {
          detailInfo: '6/8(10)',
          questionImg: [],
          questionSentence: '肝臓のグリソン鞘内に無いものを二つ選びなさい？',
          answerImg: [liver],
          answer: '中心静脈、肝細胞索',
          commentary: 'グリソン鞘は肝小葉の間の結合組織。',
          choices: [
            '小葉間動脈',
            '小葉間胆管',
            '中心静脈',
            '肝細胞索',
            '小葉間静脈',
          ],
        },
        {
          detailInfo: '6/8(11)',
          questionImg: [],
          questionSentence: '膵臓の外分泌部にあって唾液腺に無いものはどれ？',
          answerImg: [pancreasTissue],
          answer: '腺房中心細胞',
          commentary: '',
          choices: ['介在部導管', '腺房中心細胞', '腺房細胞', '小葉間結合組織'],
        },
        {
          detailInfo: '6/9(1)',
          questionImg: [],
          questionSentence: '肺外気道の上皮の形態は？',
          answerImg: [],
          answer: '多列線毛上皮',
          commentary: '',
          choices: [
            '重層扁平上皮',
            '単層円柱上皮',

            '移行上皮',

            '多列線毛上皮',

            '単層扁平上皮',
          ],
        },
        {
          detailInfo: '6/9(2)',
          questionImg: [],
          questionSentence:
            'サーファクタントの産生、分泌を行う細胞をふたつ選びなさい。',
          answerImg: [alveolus],
          answer: 'クララ細胞、Ⅱ型肺胞上皮細胞',
          commentary: '',
          choices: [
            'クララ細胞',

            'goblet cell',

            'Ⅰ型肺胞上皮細胞',

            '内皮細胞',

            'Ⅱ型肺胞上皮細胞',
          ],
        },
        {
          detailInfo: '6/9(3)',
          questionImg: [],
          questionSentence:
            'blood air barrierの構成で正しいものを選びなさい。（肺胞腔側から）',
          answerImg: [BloodAir],
          answer: 'サーファクタント→肺胞上皮→基底膜→血管内皮細胞',
          commentary: '',
          choices: [
            'サーファクタント→肺胞上皮→基底膜→血管内皮細胞',

            '肺胞上皮→サーファクタント→血管内皮細胞→基底膜',

            '基底膜→血管内皮細胞→サーファクタント→肺胞上皮',

            '血管内皮細胞→サーファクタント→肺胞上皮→基底膜',
          ],
        },
        {
          detailInfo: '6/9(4)',
          questionImg: [],
          questionSentence: 'ボウマン嚢の中に無いのはどれ？',
          answerImg: [JGA],
          answer: '緻密班',
          commentary: '緻密班：macula densa',
          choices: [
            '有窓性毛細血管',

            'たこ足細胞',

            '緻密班',

            'メサンギウム細胞',

            '原尿',
          ],
        },
        {
          detailInfo: '6/9(5)',
          questionImg: [],
          questionSentence: 'PAS染色に陰性なのは？',
          answerImg: [],
          answer: 'たこ足細胞',
          commentary: 'PAS染色は糖タンパクに反応する',
          choices: [
            '近位尿細管の刷子縁',

            '血管の基底膜',

            'たこ足細胞',

            'メサンギウム細胞',

            '尿細管の基底膜',
          ],
        },
        {
          detailInfo: '6/9(6)',
          questionImg: [],
          questionSentence: 'ネフロンに含まれないのは？',
          answerImg: [renalTubule],
          answer: '輸入細動脈',
          commentary: '糸球体+ボウマン嚢+尿細管=ネフロン',
          choices: ['糸球体', '輸入細動脈', 'ボウマン嚢', '尿細管'],
        },
        {
          detailInfo: '6/9(7)',
          questionImg: [],
          questionSentence:
            'ボウマン嚢から出た原尿が通る順番で正しいのはどれ？',
          answerImg: [renalTubule],
          answer: '',
          commentary: '',
          choices: [
            '近位曲尿細管→ヘンレループ→遠位曲尿細管→集合細管→集合管',

            '近位曲尿細管→遠位曲尿細管→ヘンレループ→集合細管→集合管',

            '遠位曲尿細管→近位曲尿細管→ヘンレループ→集合細管→集合管',

            '集合細管→近位曲尿細管→ヘンレループ→遠位曲尿細管→集合管',
          ],
        },
        {
          detailInfo: '6/15(1)',
          questionImg: [],
          questionSentence: '精細管内に無いのはどれ？',
          answerImg: [],
          answer: 'ライディッヒ細胞',
          commentary: '',
          choices: [
            'セルトリ細胞',
            '精子',
            '二次精母細胞',
            'ライディッヒ細胞',
            '精祖細胞',
          ],
        },
        {
          detailInfo: '6/15(2)',
          questionImg: [],
          questionSentence: '血液精巣関門の傍腔区画に含まれないのはどれ？',
          answerImg: [],
          answer: '精祖細胞',
          commentary: '',
          choices: [
            '精子',
            '二次精母細胞',
            '精細胞',
            '精祖細胞',
            '一次精母細胞',
          ],
        },
        {
          detailInfo: '6/15(3)',
          questionImg: [],
          questionSentence: '単一の管はどれか、二つ選びなさい。',
          answerImg: [],
          answer: '精巣上体管、精管',
          commentary: '',
          choices: ['曲精細管', '精巣上体管', '精巣輸出管', '直精細管', '精管'],
        },
        {
          detailInfo: '6/15(4)',
          questionImg: [],
          questionSentence: '平滑筋層がもっとも発達しているのはどれ？',
          answerImg: [],
          answer: '精管',
          commentary: '精管は筋肉の管',
          choices: ['曲精細管', '精巣上体管', '精巣輸出管', '直精細管', '精管'],
        },
        {
          detailInfo: '6/15(5)',
          questionImg: [],
          questionSentence: '上皮に不動毛を持つものを二つ選びなさい。',
          answerImg: [],
          answer: '精巣上体管、精管',
          commentary: '',
          choices: ['曲精細管', '精巣上体管', '精巣輸出管', '直精細管', '精管'],
        },
        {
          detailInfo: '6/15-2(1)',
          questionImg: [],
          questionSentence: '卵胞内に含まれないものをすべて選びなさい。',
          answerImg: [follicle2],
          answer: '二次卵母細胞、内卵胞膜',
          commentary: '卵胞＝一次卵母細胞+卵胞上皮',
          choices: [
            '卵胞上皮細胞',
            '一次卵母細胞',
            '二次卵母細胞',
            '内卵胞膜',
            '透明帯',
          ],
        },
        {
          detailInfo: '6/15-2(2)',
          questionImg: [],
          questionSentence:
            'ステロイド産生細胞に特徴的にみられるものをすべて選びなさい。',
          answerImg: [],
          answer: '管状クリステを持つミトコンドリア、脂肪滴、管状のsER',
          commentary: '',
          choices: [
            '管状クリステを持つミトコンドリア',
            '細胞内分泌細管',
            '脂肪滴',
            '管状のsER',
            '発達したゴルジ装置',
          ],
        },
        {
          detailInfo: '6/15-2(3)',
          questionImg: [],
          questionSentence:
            '卵管の各部名称の順番で正しいものを選びなさい。(子宮側から）',
          answerImg: [],
          answer: '卵管子宮部→峡部→膨大部→漏斗→卵管采',
          commentary: '',
          choices: [
            '卵管子宮部→卵管采→峡部→漏斗→膨大部',
            '卵管子宮部→峡部→漏斗→膨大部→卵管采',
            '卵管子宮部→峡部→膨大部→漏斗→卵管采',
            '卵管子宮部→漏斗→峡部→膨大部→卵管采',
          ],
        },
        {
          detailInfo: '6/15-2(4)',
          questionImg: [],
          questionSentence: '子宮内膜に存在するものをすべて選びなさい。',
          answerImg: [],
          answer: '中心静脈以外全て4つ',
          commentary: '中心静脈は肝臓',
          choices: ['子宮腺', '細網組織', '線毛細胞', 'らせん動脈', '中心静脈'],
        },
        {
          detailInfo: '6/15-2(5)',
          questionImg: [],
          questionSentence:
            '月経で剥がれ落ちる組織はどれか、正しいものをすべて選びなさい。',
          answerImg: [],
          answer: '子宮内膜の上皮、子宮内膜の機能層',
          commentary: '',
          choices: [
            '子宮内膜の上皮',
            '子宮筋層',
            '子宮内膜の基底層',
            '子宮内膜の機能層',
            '子宮漿膜',
          ],
        },
        {
          detailInfo: '6/16(1)',
          questionImg: [],
          questionSentence: '次の中から母体由来の組織(細胞）を選びなさい。',
          answerImg: [],
          answer: '基底脱落膜',
          commentary: 'あとは胎児性',
          choices: [
            '絨毛の合胞体性栄養膜',
            '絨毛のラングハンス細胞',
            '基底脱落膜',
            '絨毛内の膠様組織',
            '絨毛の毛細血管',
          ],
        },
        {
          detailInfo: '6/16(2)',
          questionImg: [],
          questionSentence: '血液胎盤関門に含まれないものを選びなさい。',
          answerImg: [placenta],
          answer: '基底脱落膜',
          commentary: '',
          choices: [
            '絨毛の合胞体性栄養膜',
            '絨毛のラングハンス細胞',
            '基底脱落膜',
            '絨毛内の膠様組織',
            '絨毛の毛細血管',
          ],
        },
        {
          detailInfo: '6/16(3)',
          questionImg: [],
          questionSentence: '外胚葉由来の腺組織はどれ？',
          answerImg: [],
          answer: '下垂体前葉',
          commentary: '',
          choices: ['下垂体前葉', '下垂体中間部', '下垂体後葉', '下垂体漏斗部'],
        },
        {
          detailInfo: '6/16(4)',
          questionImg: [],
          questionSentence: '好酸性細胞をふたつ選びなさい。',
          answerImg: [],
          answer: '成長ホルモン分泌細胞、乳腺刺激ホルモン分泌細胞',
          commentary: '',
          choices: [
            '乳腺刺激ホルモン分泌細胞',
            '副腎皮質刺激ホルモン分泌細胞',
            '甲状腺刺激ホルモン分泌細胞',
            '成長ホルモン分泌細胞',
            '性腺刺激ホルモン分泌細胞',
          ],
        },
        {
          detailInfo: '6/16(5)',
          questionImg: [],
          questionSentence: '間違っているものを選びなさい。',
          answerImg: [],
          answer: '副甲状腺刺激ホルモン',
          commentary: '副甲状腺刺激ホルモンはACTH。ADHはバソプレシンの別名。',
          choices: [
            '乳腺刺激ホルモン＝PRL',
            '副腎皮質刺激ホルモン＝ADH',
            '甲状腺刺激ホルモン＝TSH',
            '成長ホルモン＝GH',
            '性腺刺激ホルモン＝FSH, LH',
          ],
        },
        {
          detailInfo: '6/16感覚器',
          questionImg: [],
          questionSentence: 'メラノサイトについて正しいのはどれか',
          choices: [
            '有色人種のほうが白色人種より多い',
            '樹状突起がある',
            '顆粒層にある',
            '抗原提示能をもつ',
            'メラニンを貪食する',
          ],
          answerImg: [],
          answer: '樹状突起がある',
          commentary:
            'メラノサイトの数自体は人種間で差がない。顆粒層ではなく基底層にあって、ランゲルハンス細胞のような抗原提示能はもたない。メラニン産生細胞である',
        },
        {
          detailInfo: '6/16感覚器',
          questionImg: [],
          questionSentence: 'デスモゾームが発達しているのはどれか',
          choices: ['角質層', '顆粒層', '有棘層', '透明層', '基底層'],
          answerImg: [],
          answer: '有棘層',
          commentary:
            '有棘層は基底層と顆粒層の間にあり、デスモゾームで互いがすべて結合しあうケラチノサイトによる数層を指す。',
        },
        {
          detailInfo: '6/16感覚器',
          questionImg: [],
          questionSentence: '表皮に含まれない細胞はどれか',
          choices: [
            '角質細胞',
            '有棘細胞',
            '線維芽細胞',
            'Merkel細胞',
            'Langerhans細胞',
          ],
          answerImg: [],
          answer: '線維芽細胞',
          commentary:
            '線維芽細胞は真皮でみられる。メルケル細胞は表皮基底層、ランゲルハンス細胞は表皮有棘層など、角質細胞や有棘細胞は表皮を構成する主要組織。',
        },
        // {
        //   detailInfo: '6/16感覚器',
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
      groupTag: 'レジュメ電顕',
      groupContents: [
        {
          detailInfo: '循環器1',
          questionImg: [capillaryTEM, capillaryTEM2],
          questionSentence: 'capillaryのTEM写真を説明せよ。',
          answerImg: [capillary],
          answer:
            '基底膜上に内皮細胞が1層のみ覆っている。内皮細胞間はタイト結合により細胞間隙の物質拡散を防止している。',
          commentary:
            '毛細血管なので内膜中膜外膜の区別なし。閉鎖帯tight junction。毛細血管を介した物質透過はこの細胞間隙ではなく内皮細胞の飲み込み作用（連続型）・小孔（有窓型Fenestrated）によって行われる。',
        },
        {
          detailInfo: '循環器2',
          questionImg: [pericyteTEM],
          questionSentence: 'PericyteのTEM写真を説明せよ。',
          answerImg: [capillary],
          answer:
            '周皮細胞は毛細血管と細静脈の外側から血管を取り巻く。内皮細胞と基底膜を共有する。周皮細胞の収縮による毛細血管の血流調節に関与。',
          commentary:
            '毛細血管や細静脈は平滑筋に乏しいため代わりに周皮細胞が血流調節を担う。',
        },
        {
          detailInfo: 'リンパ性器官1',
          questionImg: [marrowSEM],
          questionSentence: '骨髄のSEM写真を説明せよ。',
          answerImg: [marrow],
          answer:
            '網状赤血球や白血球は、洞様毛細血管の内皮細胞の孔を通って血管内へ入る。骨髄実質には、成熟途上の血液細胞が密に存在する。',
          commentary:
            '血液細胞は骨髄の細網細胞で分化し、成熟して遊走性を得た網状赤血球・白血球が洞様毛細血管sinusoidを通過できる。骨髄実質内で識別できる血液細胞は赤芽球島や巨核球ぐらい',
        },
        {
          detailInfo: 'リンパ性器官2',
          questionImg: [spleenSEM],
          questionSentence: '脾臓のSEM写真を説明せよ。',
          answerImg: [spleen],
          answer:
            '円筒状の内皮細胞（脾洞）を通過する赤血球と、通過できず脾索内で捕食される古い赤血球に選別されている。',
          commentary:
            '赤脾髄の脾索中のマクロファージが老化赤血球や異常赤血球を貪食する。赤脾髄は開放循環であり、ここを通過する血液は一度血管外へ出る。',
        },
        {
          detailInfo: '消化器1',
          questionImg: [stomachSEM],
          questionSentence: '胃表面のSEM写真を説明せよ。',
          answerImg: [gastricGland],
          answer:
            '左)胃表面を上から見た図で、胃小窩から粘液が噴き出している。右)胃表面を側面から見た図で、胃小窩と胃腺に沿った断面が見えている。',
          commentary:
            '粘液は表面上皮細胞surface mucous cellか副細胞mucous neck cellから分泌されたもの。非常に発達した腺構造が粘膜固有層に林立している。胃小窩の間の空間は粘膜固有層。',
        },
        {
          detailInfo: '消化器2',
          questionImg: [surfaceMucousTEM],
          questionSentence: 'Surface mucous cellのTEM写真を説明せよ。',
          answerImg: [],
          answer:
            '胃腺表面上皮細胞は塩酸に溶けにくい粘液（ムチンとHCO3-）を分泌。強酸から胃粘膜を守り胃表面の潤滑に関与する。',
          commentary:
            '電子密度の高い粘液顆粒を表面に多数保有している。核が基底側に押しやられている。G:Golgi,M:mitochondria,rER:rough-surfaced endoplasmic reticulum',
        },
        {
          detailInfo: '消化器3',
          questionImg: [mucousNeckTEM],
          questionSentence: 'Mucous neck cellのTEM写真を説明せよ。',
          answerImg: [gastricGland],
          answer:
            '副細胞は胃小窩の頚部でムチンなどアルカリ性の粘液を分泌し、胃粘膜を保護する。PAS陽性',
          commentary:
            '電子密度の高い粘液顆粒を多数保有し、核が基底側に押しやられている。PAS染色は糖タンパクに反応する。HE染色では紫（塩基性）に染まる。',
        },
        {
          detailInfo: '消化器4',
          questionImg: [parietalTEM],
          questionSentence: 'Parietal cellのTEM写真を説明せよ。',
          answerImg: [gastricGland],
          answer:
            '胃腺壁細胞は主細胞や副細胞の間に孤立散在する大型の細胞で、核は中央にあり、豊富なミトコンドリア(M)をもつ。核の周りの細胞膜が深く落ち込んでおり、細胞内分泌細管(IC)という。',
          commentary:
            '細胞内分泌細管IC:intracellular canaliculiは休止期には退化し細管小胞となる。分泌刺激を受けると再び癒合して細胞膜と繋がる。',
        },
        {
          detailInfo: '消化器5',
          questionImg: [chiefTEM],
          questionSentence: 'Chief cellのTEM写真を説明せよ。',
          answerImg: [gastricGland],
          answer:
            '胃腺主細胞には粗面小胞体rERが集積しており、ゴルジ装置Gが発達している(蛋白生産細胞の特徴)。好塩基性を示す。ペプシノーゲンを含む電子密度の低い分泌顆粒が多数見られ、核は基底側に押しやられている。',
          commentary: 'ペプシノーゲンは胃酸によってペプシンに変化する。',
        },
        {
          detailInfo: '消化器6',
          questionImg: [villiSEM],
          questionSentence: 'villiのSEM写真を説明せよ。',
          answerImg: [intestine],
          answer:
            '小腸上皮では粘膜固有層が指状に突出して絨毛を形成し、表面を覆い尽くしている。それぞれの絨毛には中心リンパ管とその外側を網のように覆う毛細血管がみられる。',
          commentary:
            '絨毛villiの周辺には陰窩（腸腺：リーベルキューン腺）が黒い影として映っている。',
        },
        {
          detailInfo: '消化器7',
          questionImg: [imageSample1],
          questionSentence:
            'brush borderのTEM写真を説明せよ（過去問出題済み）。',
          answerImg: [microvilli],
          answer:
            '吸収上皮細胞の微絨毛とその表面を覆う厚い糖鎖が写真中央に、吸収上皮細胞の細胞内小器官や上皮細胞間のjunctional complexが左側に見えている。',
          commentary: '微絨毛の膜で最終的消化吸収が行われる（膜消化）',
        },
        {
          detailInfo: '消化器8',
          questionImg: [panethTEM],
          questionSentence: 'Paneth cellのTEM写真を説明せよ。',
          answerImg: [intestine],
          answer:
            '管腔側にデフェンシン分泌顆粒がみられ、核が基底側に押しやられている。',
          commentary:
            'パネート細胞は陰窩の底部に固まって存在する。顆粒は好酸性で、デフェンシンdefensinを分泌し感染防御に関与する。',
        },
        {
          detailInfo: '消化器9',
          questionImg: [peyersPatchSEM, MCellSEM],
          questionSentence: 'Peyers patchとM cellのSEM写真を説明せよ。',
          answerImg: [intestine],
          answer:
            'パイエル板の表層をM細胞が構成している。M細胞は腸管免疫の主役であり、その管腔面は微絨毛に乏しく微小ヒダを持っている。',
          commentary:
            '微小ヒダmicrofold。M細胞の深層にはリンパ小節があるためパイエル板Peyers patchは膨らんでいる。絨毛や輪状ヒダはこの部分にはない。',
        },
        {
          detailInfo: '呼吸器1',
          questionImg: [tracheaTEM],
          questionSentence: '多列線毛上皮のSEM写真を説明せよ。',
          answerImg: [trachea],
          answer:
            '気道上皮は単層で、線毛細胞（細くて丈が高く、核は基底側による）・杯細胞（粘液産生、線毛に乏しい）・刷子細胞（丈が高く未発達の線毛がみられる）・基底細胞（丈が低く映っていない）で構成されている。',
          commentary:
            '線毛で粘膜とともに補足された粉塵などを鼻・咽頭側に運んでいる。細胞核の位置も丈の高さもバラバラであるが、上皮細胞はすべて基底膜に接している。',
        },
        {
          detailInfo: '呼吸器2',
          questionImg: [claraSEMTEM],
          questionSentence: 'Clara cellのSEM/TEM写真を説明せよ。',
          answerImg: [bronchiole],
          answer:
            '細気管支の単層上皮は線毛細胞とクララ細胞で構成される。クララ細胞は線毛を持たず、丈の高い細胞で、ミトコンドリアや滑面小胞体、分泌顆粒が認められる。サーファクタントの産生を行っている。',
          commentary:
            '細気管支では末梢に近づくにつれ単層円柱上皮→単層立方上皮に。気管腺や軟骨はないが、平滑筋SMが弾性繊維とともに管径を維持しており、写真下部にも映っている。',
        },
        {
          detailInfo: '呼吸器3',
          questionImg: [alveolarSEM],
          questionSentence: '肺胞上皮のSEM写真を説明せよ。',
          answerImg: [alveolus],
          answer:
            '肺胞表面は扁平でガス交換に関与するⅠ型肺胞上皮細胞と立方形でサーファクタント分泌を行うⅡ型肺胞上皮細胞で覆われ、基底膜の内側には毛細血管やその内皮細胞が映っている。',
          commentary:
            '血液-空気関門blood air barrierは肺胞上皮・基底膜・血管内皮を介して行われる。肺胞内にはその他肺胞マクロファージもみられる。',
        },
        {
          detailInfo: '泌尿器1',
          questionImg: [glomerularCapillaryTEM],
          questionSentence: '糸球体毛細血管のTEM写真を説明せよ。',
          answerImg: [kidneyCorpuscle],
          answer:
            '腎臓糸球体の毛細血管は有窓性毛細血管で、その孔は隔膜を持たず、透過性が高い。',
          commentary:
            'ほぼ素通しであるが、洞様毛細血管ではない。血液尿関門の実質の関門は基底膜とたこ足細胞',
        },
        {
          detailInfo: '泌尿器2',
          questionImg: [mesangialTEM],
          questionSentence: 'メサンギウム細胞のTEM写真を説明せよ。',
          answerImg: [],
          answer:
            'メサンギウム細胞は毛細血管に向かって大きな突起を伸ばし、糸球体基底膜を介さずに接している。メサンギウム基質がメサンギウム細胞の周囲を埋めている。',
          commentary:
            'PAS陽性。アクチンフィラメントを主体とする収縮装置が備わっており、メサンギウム細胞の収縮によって糸球体濾過量GFRを調節している。',
        },
        {
          detailInfo: '泌尿器3',
          questionImg: [podocyteSEM],
          questionSentence: 'たこ足細胞のSEM写真を説明せよ。',
          answerImg: [],
          answer:
            '足細胞は基底膜の上から血管内皮細胞とメサンギウム細胞を抱きかかえている。ろ過機能のために高度に分化した上皮細胞である。',
          commentary:
            '足細胞とボウマン嚢壁側上皮とは折れ返って繋がっている。大小の突起は隣り合う足細胞と噛み合って血管表面の大部分を覆っている。',
        },
        {
          detailInfo: '泌尿器3',
          questionImg: [proximalTubuleTEM],
          questionSentence: 'proximal tubuleのTEM写真を説明せよ。',
          answerImg: [renalTubule],
          answer:
            '近位尿細管は基底線条と微絨毛が発達している。基底線条にはミトコンドリアMが豊富で能動輸送を盛んに行っている。',
          commentary:
            '単層立方上皮。エオジンに強く染色する。細胞嵌合もみられる。',
        },
        {
          detailInfo: '泌尿器4',
          questionImg: [interMediateTubuleTEM],
          questionSentence: '近位尿細管-中間尿細管移行部のTEM写真を説明せよ。',
          answerImg: [renalTubule],
          answer:
            '単層立方上皮の近位尿細管から単層扁平上皮の中間尿細管への移行部。中間尿細管は微絨毛や基底線条を持たない。',
          commentary: 'DH:descending limb of loop Henle,PT:proximal tubule',
        },
        {
          detailInfo: '生殖器1',
          questionImg: [BTBarrierTEM],
          questionSentence: 'Blood-testis barrierのTEM写真を説明せよ。',
          answerImg: [testis],
          answer:
            '中央のセルトリ細胞どおしのtight junctionにより傍腔区画への免疫反応を制限している。',
          commentary:
            '写真下が基底膜。中央の細胞が曲精細管基底区画の精祖細胞で、その上が傍腔区画と推測される。セルトリ細胞はインヒビン（FSHを抑制）とエストロゲンを分泌する',
        },
        {
          detailInfo: '生殖器2',
          questionImg: [follicleTEM],
          questionSentence: '二次卵母細胞のTEM写真を説明せよ。',
          answerImg: [follicle2],
          answer:
            '第1減数分裂後の二次卵母細胞は一次極体を抱えて排卵を迎える。二次卵母細胞の中には第二減数分裂中期で停止したままの染色体が見える。',
          commentary:
            '二次卵母細胞は透明帯・放線冠を伴って卵巣から排出される。',
        },
        {
          detailInfo: '生殖器3',
          questionImg: [ovaryTEM],
          questionSentence: '黄体の顆粒層ルテイン細胞のTEM写真を説明せよ。',
          answerImg: [],
          answer:
            '黄体はステロイドホルモンであるプロゲステロンを分泌する。ステロイドホルモン産生細胞は、1)脂肪滴、2)管状クリステ、3)管状滑面小胞体という特徴を持つ。',
          commentary: '卵胞の顆粒層細胞の排卵後の姿。',
        },

        {
          detailInfo: '生殖器4',
          questionImg: [oviductSEM, oviductTEM],
          questionSentence: '卵管上皮細胞のSEM/TEM写真を説明せよ。',
          answerImg: [],
          answer:
            '卵管上皮は単層円柱上皮で、丸い核・ゴルジ装置の発達した線毛細胞と、細長い核・粗面小胞体等が発達した分泌細胞で構成される。分泌細胞は線毛に乏しい。',
          commentary:
            '分泌細胞Peg Cell,線毛細胞Ciliated Cell,矢印：電子密度の高い分泌物が見える',
        },
        {
          detailInfo: '生殖器5',
          questionImg: [placentaTEM],
          questionSentence: 'blood placenta barrierのTEM写真を説明せよ。',
          answerImg: [placenta],
          answer:
            '血液胎盤関門を構成する層は、（母体側血管）→合胞体性栄養膜→細胞性栄養膜（ラングハンス細胞）→基底膜→絨毛疎性結合組織→毛細血管基底膜→毛細血管内皮　の順に通過する。',
          commentary: '妊娠後期になると栄養膜細胞層や疎性結合組織が薄くなる。',
        },
        {
          detailInfo: '内分泌器官1',
          questionImg: [hypophysisTEM1, hypophysisTEM2],
          questionSentence:
            '脳下垂体前葉のホルモン分泌細胞群（2枚目はGonadotroph)のTEM写真を説明せよ。',
          answerImg: [anteriorPituitaryE, anteriorPituitaryH],
          answer:
            '成長ホルモンGH分泌細胞は小型の細胞で大型で丸い顆粒をもつ。乳腺刺激ホルモンPRL分泌細胞は大型の細胞で歪な大小の顆粒をもつ。副腎髄質刺激ホルモンACTH分泌細胞はHE染色で染まらないような小さな顆粒をもつ。性腺刺激ホルモンLH/FSH分泌細胞は小型の細胞で大きな核を持ち、GH分泌細胞やPRL分泌細胞と比べて小さな分泌顆粒を持つ。',
          commentary:
            '（酸好性/エオジン好染）成長ホルモン分泌細胞>乳腺刺激ホルモン分泌細胞>副腎皮質刺激ホルモン>性腺刺激ホルモン分泌細胞>甲状腺刺激ホルモン分泌細胞（塩基好性/ヘマトキシリン好染）',
        },
        {
          detailInfo: '内分泌器官2',
          questionImg: [thyroidTEM, thyroidSEM],
          questionSentence: '甲状腺のTEM/SEM写真を説明せよ。',
          answerImg: [],
          answer:
            '甲状腺は内分泌器官であるが、内部にコロイドを蓄えた濾胞が存在し上皮細胞の外側を洞様毛細血管が網状に取り巻いている。カルシトニンを分泌する傍濾胞細胞は内部に電子密度の高い顆粒を持っている。',
          commentary:
            '甲状腺上皮細胞は単層上皮で、甲状腺の分泌量によって扁平化したり立方化したりする。',
        },
        {
          detailInfo: '内分泌器官3',
          questionImg: [adrenalGlandTEM],
          questionSentence: '副腎皮質束状帯のTEM写真を説明せよ。',
          answerImg: [adrenalGland],
          answer:
            '細胞質に多量の脂肪滴を持ち、ミトコンドリアが小胞体クリステを持つ。滑面小胞体が発達している。',
          commentary:
            '束状帯はコルチゾールや弱い男性ホルモン（デヒドロエピアンドロステロン）などのステロイドホルモンを分泌する。',
        },
        {
          detailInfo: '内分泌器官4',
          questionImg: [medullaTEM],
          questionSentence: '副腎髄質のTEM写真を説明せよ。',
          answerImg: [adrenalGland],
          answer:
            'アドレナリン分泌細胞とノルアドレナリン分泌細胞は同程度の大きさの分泌顆粒を持つが、NA含有顆粒はA含有顆粒より電子密度が高く、区別することができる。',
          commentary:
            '血液上流からの糖質コルチコイドによってNA→アドレナリン合成が誘導される',
        },
        {
          detailInfo: '内分泌器官5',
          questionImg: [pancreasATEM, pancreasBTEM],
          questionSentence: 'ランゲルハンス島のTEM写真を説明せよ。',
          answerImg: [pancreasTissue],
          answer:
            '1枚目はグルカゴン合成のA細胞で、限界膜に包まれた高電子密度の顆粒が多数みられる。2枚目はインスリン合成のB細胞で、限界膜に包まれた様々な種類の顆粒がみられる。',
          commentary:
            'A細胞はランゲルハンス島周辺部に多く、B細胞はランゲルハンス島中心付近に偏在している。',
        },
        // {
        //   detailInfo: '内分泌器官',
        //   questionImg: [TEM],
        //   questionSentence: 'のTEM写真を説明せよ。',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2015各論',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下の血管の中で、弾性型動脈は？',
          choices: [
            'aorta',
            'arteriole',
            'vein',
            'post-capillary venule ',
            'artery',
            'capillary',
            'venule',
          ],
          answerImg: [],
          answer: 'aorta',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '以下の血管の中で、リンパ球の血管外移行に関与する血管',
          choices: [
            'aorta',
            'arteriole',
            'vein',
            'post-capillary venule ',
            'artery',
            'capillary',
            'venule',
          ],
          answerImg: [thymus],
          answer: 'post-capillary venule',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下の血管の中で、循環血液の貯蔵場所となる血管',
          choices: [
            'aorta',
            'arteriole',
            'vein',
            'post-capillary venule ',
            'artery',
            'capillary',
            'venule',
          ],
          answerImg: [],
          answer: 'venule',
          commentary:
            '毛細血管を通過した後の細い静脈は細静脈venuleといわれる。血液全体の2/3以上が細静脈と静脈にあり、容量血管として循環血液の貯蔵場所となる。(正常構造p142)',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下の血管の中で、立法形の内皮細胞を持つ血管',
          choices: [
            'aorta',
            'arteriole',
            'vein',
            'post-capillary venule ',
            'artery',
            'capillary',
            'venule',
          ],
          answerImg: [],
          answer: 'post-capillary venule',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '腺構造で、小葉間に存在するもの',
          choices: [
            '筋上皮細胞',
            '線条部導管',
            '排出系導管',
            '粘液細胞',
            '中心腺房細胞',
            '介在部導管',
            '漿液腺房',
          ],
          answerImg: [],
          answer: '排出系導管',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '腺構造で、膵臓にのみ存在するもの',
          choices: [
            '筋上皮細胞',
            '線条部導管',
            '排出系導管',
            '粘液細胞',
            '中心腺房細胞',
            '介在部導管',
            '漿液腺房',
          ],
          answerImg: [pancreasTissue],
          answer: '中心腺房細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '腺構造で、腺房からの分泌物を運ぶ最初の管',
          choices: [
            '筋上皮細胞',
            '線条部導管',
            '排出系導管',
            '粘液細胞',
            '中心腺房細胞',
            '介在部導管',
            '漿液腺房',
          ],
          answerImg: [pancreasTissue],
          answer: '介在部導管',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '腺構造で、基底陥入にミトコンドリアが多く存在し、好酸性を示すもの',
          choices: [
            '筋上皮細胞',
            '線条部導管',
            '排出系導管',
            '粘液細胞',
            '中心腺房細胞',
            '介在部導管',
            '漿液腺房',
          ],
          answerImg: [],
          answer: '線条部導管',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'リンパ性器官で、基本的な骨組みを作る細胞',
          choices: [
            '脾洞',
            'リンパ節',
            '脾索',
            'マクロファージ',
            '細網細胞',
            'ハッサル小体',
            '類洞',
            '間葉細胞',
          ],
          answerImg: [],
          answer: '細網細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'リンパ性器官で、白脾髄にのみ存在するもの',
          choices: [
            '脾洞',
            'リンパ小節',
            '脾索',
            'マクロファージ',
            '細網細胞',
            'ハッサル小体',
            '類洞',
            '間葉細胞',
          ],
          answerImg: [spleen],
          answer: 'リンパ小節',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'リンパ性器官で、脾臓の毛細血管/細静脈の名称は？',
          choices: [
            '脾洞',
            'リンパ節',
            '脾索',
            'マクロファージ',
            '細網細胞',
            'ハッサル小体',
            '類洞',
            '間葉細胞',
          ],
          answerImg: [spleen],
          answer: '脾洞',
          commentary:
            '脾洞は、特徴的な構造を持つ径50～100μmの洞様血管で、細静脈が特殊化したものと考えられている（正常構造p533）',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'リンパ性器官で、胸腺でのみ観察されるもの',
          choices: [
            '脾洞',
            'リンパ節',
            '脾索',
            'マクロファージ',
            '細網細胞',
            'ハッサル小体',
            '類洞',
            '間葉細胞',
          ],
          answerImg: [thymus],
          answer: 'ハッサル小体',
          commentary:
            '胸腺の細網細胞のみ上皮性細網細胞epithelial reticular cellであるため、髄質で角化性の変性を起こしハッサル小体を形成する。胸腺以外のリンパ性器官は間葉性細網細胞mesenchymal reticular cellsをもつ。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '胃・腸の上皮を形成する細胞のうち、胃腺で粘液を分泌する細胞',
          choices: [
            '杯細胞',
            '吸収上皮細胞',
            '壁細胞',
            'パネート細胞',
            'M細胞',
            '副細胞',
            '主細胞',
          ],
          answerImg: [gastricGland],
          answer: '副細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '胃・腸の上皮を形成する細胞のうち、胃腺でエオジンに好染する細胞',
          choices: [
            '杯細胞',
            '吸収上皮細胞',
            '壁細胞',
            'パネート細胞',
            'M細胞',
            '副細胞',
            '主細胞',
          ],
          answerImg: [gastricGland],
          answer: '壁細胞',
          commentary: 'エオジン好染＝好酸性',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '胃・腸の上皮を形成する細胞のうち、微絨毛を持ち腸での吸収機能を司る細胞',
          choices: [
            '杯細胞',
            '吸収上皮細胞',
            '壁細胞',
            'パネート細胞',
            'M細胞',
            '副細胞',
            '主細胞',
          ],
          answerImg: [intestine],
          answer: '吸収上皮細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '胃・腸の上皮を形成する細胞のうち、腸管免疫を司る細胞',
          choices: [
            '杯細胞',
            '吸収上皮細胞',
            '壁細胞',
            'パネート細胞',
            'M細胞',
            '副細胞',
            '主細胞',
          ],
          answerImg: [intestine],
          answer: 'M細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '胃・腸の上皮を形成する細胞のうち、defensinを分泌する細胞',
          choices: [
            '杯細胞',
            '吸収上皮細胞',
            '壁細胞',
            'パネート細胞',
            'M細胞',
            '副細胞',
            '主細胞',
          ],
          answerImg: [intestine],
          answer: 'パネート細胞',
          commentary: 'パネート細胞はエオジン好染',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '肝臓で、2つの核を持つことがある細胞',
          choices: [
            '内皮細胞',
            '脾洞',
            '伊東細胞',
            'クッパー細胞',
            'ピット細胞',
            '肝細胞',
            '類洞',
          ],
          answerImg: [liver],
          answer: '肝細胞',
          commentary: '肝細胞は再生能力が高い',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '肝臓で、肝臓のマクロファージとされる細胞',
          choices: [
            '内皮細胞',
            '脾洞',
            '伊東細胞',
            'クッパー細胞',
            'ピット細胞',
            '肝細胞',
            '類洞',
          ],
          answerImg: [liver],
          answer: 'クッパー細胞',
          commentary: 'ピット細胞は肝臓のNK細胞。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '肝臓の洞様毛細血管の別名は？',
          choices: [
            '内皮細胞',
            '脾洞',
            '伊東細胞',
            'クッパー細胞',
            'ピット細胞',
            '肝細胞',
            '類洞',
          ],
          answerImg: [hepaticLobule],
          answer: '類洞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '肝臓で、ディッセ腔に存在するものは？',
          choices: [
            '内皮細胞',
            '脾洞',
            '伊東細胞',
            'クッパー細胞',
            'ピット細胞',
            '肝細胞',
            '類洞',
          ],
          answerImg: [liver],
          answer: '伊東細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '呼吸器の組織で、上皮にクララ細胞を持つもの',
          choices: ['気管支', '終末細気管支', '鼻前庭', '鼻腔', '肺胞嚢'],
          answerImg: [bronchiole],
          answer: '終末細気管支',
          commentary: '細気管支では杯細胞に代わってクララ細胞がみられる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '呼吸器の組織で、外膜に軟骨を持つもの',
          choices: ['気管支', '終末細気管支', '鼻前庭', '鼻腔', '肺胞嚢'],
          answerImg: [],
          answer: '気管支',
          commentary: '区域気管支までは軟骨をもつ。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '呼吸器の組織で、単層立方上皮をもつもの',
          choices: ['気管支', '終末細気管支', '鼻前庭', '鼻腔', '肺胞嚢'],
          answerImg: [],
          answer: '終末細気管支',
          commentary:
            '細気管支の上皮は単層線毛上皮でできているが、末梢に行くにつれて丈が低くなり、円柱上皮から立方上皮に移行する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '呼吸器の組織で、気道ではなく呼吸部に属するもの',
          choices: ['気管支', '終末細気管支', '鼻前庭', '鼻腔', '肺胞嚢'],
          answerImg: [alveolus],
          answer: '肺胞嚢',
          commentary:
            '下気道を機能面から考えると、気管から終末細気管支までのガス交換に関与しない導管部と、呼吸細気管支以下のガス交換に関与する呼吸部に分けることができる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '腎臓で、基底膜の上から糸球体毛細血管を抱え込む細胞',
          choices: [
            'たこ足細胞',
            '血管内皮細胞',
            '遠位尿細管',
            'メサンギウム細胞',
            '傍糸球体細胞',
            '集合管',
            '近位尿細管',
          ],
          answerImg: [kidneyCorpuscle],
          answer: 'たこ足細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '腎臓で、PAS染色に陽性である細胞',
          choices: [
            'たこ足細胞',
            '血管内皮細胞',
            '遠位尿細管',
            'メサンギウム細胞',
            '傍糸球体細胞',
            '集合管',
            '近位尿細管',
          ],
          answerImg: [],
          answer: 'メサンギウム細胞',
          commentary:
            '基底膜およびメサンギウム基質は構成成分に糖タンパクを含むためPAS陽性を示す。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '腎臓で、レニンを分泌する細胞',
          choices: [
            'たこ足細胞',
            '血管内皮細胞',
            '遠位尿細管',
            'メサンギウム細胞',
            '傍糸球体細胞',
            '集合管',
            '近位尿細管',
          ],
          answerImg: [JGA],
          answer: '傍糸球体細胞',
          commentary:
            '顆粒細胞とも呼ばれる。輸入細動脈の緻密班に接する平滑筋細胞が変化したもので、大型で丸い核をもつ。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '腎臓で、緻密班を含む尿細管',
          choices: [
            'たこ足細胞',
            '血管内皮細胞',
            '遠位尿細管',
            'メサンギウム細胞',
            '傍糸球体細胞',
            '集合管',
            '近位尿細管',
          ],
          answerImg: [JGA],
          answer: '遠位尿細管',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '腎臓で、細胞質が明るく細胞の境界が明確な尿細管',
          choices: [
            'たこ足細胞',
            '血管内皮細胞',
            '遠位尿細管',
            'メサンギウム細胞',
            '傍糸球体細胞',
            '集合管',
            '近位尿細管',
          ],
          answerImg: [renalTubule],
          answer: '集合管',
          commentary:
            '単層立方～円柱上皮。ミトコンドリアが少ないため細胞質が非常に明るく、細胞境界が鮮明。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '精巣で、精子形成細胞を栄養・支持している細胞',
          choices: [
            'ライディッヒ細胞',
            '精祖細胞',
            '精母細胞',
            'セルトリ細胞',
            '精子細胞',
            '精娘細胞',
            '筋上皮細胞',
          ],
          answerImg: [testis],
          answer: 'セルトリ細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '精巣で、テストステロンを分泌する細胞',
          choices: [
            'ライディッヒ細胞',
            '精祖細胞',
            '精母細胞',
            'セルトリ細胞',
            '精子細胞',
            '精娘細胞',
            '筋上皮細胞',
          ],
          answerImg: [testis],
          answer: 'ライディッヒ細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '精巣で、血液精子関門を作っている細胞',
          choices: [
            'ライディッヒ細胞',
            '精祖細胞',
            '精母細胞',
            'セルトリ細胞',
            '精子細胞',
            '精娘細胞',
            '筋上皮細胞',
          ],
          answerImg: [testis],
          answer: 'セルトリ細胞',
          commentary:
            '隣接するセルトリ細胞同士はtight Junctionを形成する（精子形成細胞に対する免疫抑制）',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '卵巣で、卵胞内に存在する細胞',
          choices: [
            '胞状卵胞',
            '放線冠',
            '卵娘細胞',
            '卵子細胞',
            '卵母細胞',
            '卵胞膜細胞',
            // 'グラーフ卵胞',
          ],
          answerImg: [follicle2],
          answer: '卵母細胞',
          commentary: '卵子細胞という言葉は厳密には存在しない',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '卵巣で、最も成熟した卵胞の名称',
          choices: [
            '胞状卵胞',
            '放線冠',
            '卵娘細胞',
            '卵子細胞',
            '卵母細胞',
            '卵胞膜細胞',
            'グラーフ卵胞',
          ],
          answerImg: [follicle2],
          answer: 'グラーフ卵胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '卵巣で、透明帯の外側の一層の卵胞上皮細胞の別名',
          choices: [
            '胞状卵胞',
            '放線冠',
            '卵娘細胞',
            '卵子細胞',
            '卵母細胞',
            '卵胞膜細胞',
            'グラーフ卵胞',
          ],
          answerImg: [follicle2],
          answer: '放線冠',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '卵巣で、排卵されるのはどの細胞？',
          choices: [
            '胞状卵胞',
            '放線冠',
            '卵娘細胞',
            '卵子細胞',
            '卵母細胞',
            '卵胞膜細胞',
            'グラーフ卵胞',
          ],
          answerImg: [],
          answer: '卵娘細胞',
          commentary: '卵娘細胞＝2次卵母細胞',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の内分泌細胞で、塩基好性の細胞',
          choices: [
            '成長ホルモン分泌細胞',
            '甲状腺刺激ホルモン分泌細胞',
            '副腎皮質刺激ホルモン分泌細胞',
            'ランゲルハンス島A細胞',
            '副腎皮質細胞',
            '副腎髄質細胞',
            '甲状腺上皮細胞',
          ],
          answerImg: [anteriorPituitaryH],
          answer: '甲状腺刺激ホルモンTSH',
          commentary:
            '塩基性強く、HE染色のヘマトキシリンで紫色に染まる。大型で角ばっている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の内分泌細胞で、色素嫌性の細胞',
          choices: [
            '成長ホルモン分泌細胞',
            '甲状腺刺激ホルモン分泌細胞',
            '副腎皮質刺激ホルモン分泌細胞',
            'ランゲルハンス島A細胞',
            '副腎皮質細胞',
            '副腎髄質細胞',
            '甲状腺上皮細胞',
          ],
          answerImg: [anteriorPituitaryH],
          answer: '副腎皮質刺激ホルモン分泌細胞ACTH',
          commentary: '塩基性弱く、細胞質は染色されない',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の内分泌細胞で、分泌物を濾胞に蓄える細胞',
          choices: [
            '成長ホルモン分泌細胞',
            '甲状腺刺激ホルモン分泌細胞',
            '副腎皮質刺激ホルモン分泌細胞',
            'ランゲルハンス島A細胞',
            '副腎皮質細胞',
            '副腎髄質細胞',
            '甲状腺上皮細胞',
          ],
          answerImg: [],
          answer: '甲状腺上皮細胞',
          commentary:
            '甲状腺濾胞Follicleを蓄え、大小さまざまの球形や楕円体ないしは不正多角形をなす',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '次の内分泌細胞で、カテコールアミンを産生・分泌する細胞',
          choices: [
            '成長ホルモン分泌細胞',
            '甲状腺刺激ホルモン分泌細胞',
            '副腎皮質刺激ホルモン分泌細胞',
            'ランゲルハンス島A細胞',
            '副腎皮質細胞',
            '副腎髄質細胞',
            '甲状腺上皮細胞',
          ],
          answerImg: [adrenalGland],
          answer: '副腎髄質',
          commentary: 'カテコールアミン（主としてアドレナリン）',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の管状の器官のうち、単層円柱上皮を持つ管',
          choices: [
            '卵管',
            '精管',
            '精巣上体管',
            '尿管',
            '精巣輸出管',
            'リンパ管',
            '曲精細管',
          ],
          answerImg: [],
          answer: '卵管',
          commentary: '卵管上皮は線毛細胞と分泌細胞が占める',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の管状の器官のうち、移行上皮を持つ管',
          choices: [
            '卵管',
            '精管',
            '精巣上体管',
            '尿管',
            '精巣輸出管',
            'リンパ管',
            '曲精細管',
          ],
          answerImg: [],
          answer: '尿管',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の管状の器官のうち、筋層が最も発達している管',
          choices: [
            '卵管',
            '精管',
            '精巣上体管',
            '尿管',
            '精巣輸出管',
            'リンパ管',
            '曲精細管',
          ],
          answerImg: [],
          answer: '精管',
          commentary:
            '精管deferent ductは良く発達した三層の平滑筋層を有し、触れると硬い。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の管状の器官のうち、精子を産生する管',
          choices: [
            '卵管',
            '精管',
            '精巣上体管',
            '尿管',
            '精巣輸出管',
            'リンパ管',
            '曲精細管',
          ],
          answerImg: [],
          answer: '曲精細管',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の管状の器官のうち、単層扁平上皮を持つ管',
          choices: [
            '卵管',
            '精管',
            '精巣上体管',
            '尿管',
            '精巣輸出管',
            'リンパ管',
            '曲精細管',
          ],
          answerImg: [],
          answer: 'リンパ管',
          commentary:
            '毛細リンパ管は非常に薄い内皮細胞のみからなり、血管と異なり、不規則な形態を示す',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '上皮組織のうち、消化管など外界に開く管の内面を覆うのは？',
          choices: ['表皮', '内皮', '中皮', '上皮', '外皮'],
          answerImg: [],
          answer: '上皮',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '上皮組織のうち、血管など外部に開かない管の内面を覆うのは？',
          choices: ['表皮', '内皮', '中皮', '上皮', '外皮'],
          answerImg: [],
          answer: '内皮',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '上皮組織のうち、上皮と移行するのは？',
          choices: ['表皮', '内皮', '中皮', '上皮', '外皮'],
          answerImg: [],
          answer: '表皮',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '上皮組織のうち、腹膜はどれにあたりますか？',
          choices: ['表皮', '内皮', '中皮', '上皮', '外皮'],
          answerImg: [],
          answer: '中皮',
          commentary: '',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '腺構造で、',
        //   choices: [
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //     '',
        //   ],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2017各論',
      groupContents: [
        {
          detailInfo: '(1)',
          questionImg: [],
          questionSentence: '有窓性毛細血管はどれか',
          choices: [
            '糸球体毛細血管',
            '毛細血管後細静脈',
            '肺胞毛細血管',
            '中心静脈',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(2)',
          questionImg: [],
          questionSentence: '単層扁平上皮はどれか',
          choices: ['大動脈', '尿細管', '呼吸細気管支', '卵巣', '精細管'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(3)',
          questionImg: [],
          questionSentence: '1 次リンパ性器官',
          choices: ['骨髄', '脾臓', 'リンパ節', '甲状腺', '膵臓'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(4)',
          questionImg: [],
          questionSentence: '血管内膜の名称',
          choices: ['内皮', '中皮', '外皮', '上皮', '表皮'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(5)',
          questionImg: [],
          questionSentence: '.リンパ球の血管性への移行に関与するもの',
          choices: ['毛細血管後細静脈', '毛細血管', '細動脈', '大静脈'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(6)',
          questionImg: [],
          questionSentence: '脾臓にないもの',
          choices: ['毛細血管後細静脈', '中心動脈', '莢動脈', '筆毛動脈'],
          answerImg: [spleen],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(7)',
          questionImg: [],
          questionSentence: '副腎の中心動脈の外膜で発達するもの          ',
          choices: ['縦走筋', '輪送筋', '弾性板', 'マイスナー神経叢'],
          answerImg: [adrenalGland],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(8)',
          questionImg: [],
          questionSentence: '多列線毛上皮であるもの',
          choices: ['区域気管支', '呼吸気管支', '肺胞', '終末細気管支'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(9)',
          questionImg: [],
          questionSentence: '電子顕微鏡下で 2 型肺胞上皮細胞に観察されるもの',
          choices: [
            '層板小体',
            '管状クリステ',
            '脂肪滴',
            'アクチンフィラメント',
          ],
          answerImg: [alveolus],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(10)',
          questionImg: [],
          questionSentence: '遊走性のあるもの',
          choices: ['マクロファージ', '細網細胞', '杵状細胞', '線維芽細胞'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(11)',
          questionImg: [],
          questionSentence: '肝細胞索の中に見られる毛細血管の名前          ',
          choices: ['類洞', '毛細血管後細静脈', '糸球体', '脾洞'],
          answerImg: [liver],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(12)',
          questionImg: [],
          questionSentence: '膵臓の小葉間にあるもの          ',
          choices: ['膵管', '介在部導管', '中心腺房細胞', '線条部導管'],
          answerImg: [pancreasTissue],
          answer: '',
          commentary:
            '介在部導管・線条部導管は小葉内の構造であり、膵臓に線条部導管は存在しない。',
        },
        {
          detailInfo: '(13)',
          questionImg: [],
          questionSentence: '介在部導管のないもの',
          choices: ['舌下腺', '顎下腺', '膵臓', '耳下腺'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(14)',
          questionImg: [],
          questionSentence: '線条部導管のないもの',
          choices: ['膵臓', '舌下腺', '顎下腺', '耳下腺'],
          answerImg: [],
          answer: '',
          commentary: '舌下腺は介在部導管をほぼ持たない',
        },
        {
          detailInfo: '(15)',
          questionImg: [],
          questionSentence: '固有胃腺でエオジン好染のもの',
          choices: ['壁細胞', '表面上皮細胞', '副細胞', '杯細胞', '主細胞'],
          answerImg: [],
          answer: '',
          commentary: 'エオジン好染：好酸性',
        },
        {
          detailInfo: '(16)',
          questionImg: [],
          questionSentence: '胃の組織で最も発達している層は？',
          choices: ['筋層', '粘膜上皮', '粘膜固有層', '粘膜筋板', '粘膜下層'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(17)',
          questionImg: [],
          questionSentence: 'PAS 染色に陽性のもの',
          choices: [
            'メサンギウム細胞',
            'ピット細胞',
            '内皮細胞',
            'セルトリ細胞',
          ],
          answerImg: [],
          answer: '',
          commentary: 'PAS染色は基底膜やメサンギウム基質の糖タンパクに反応する',
        },
        {
          detailInfo: '(18)',
          questionImg: [],
          questionSentence: 'ディッセ腔で見られる細胞          ',
          choices: [
            '伊東細胞',
            'クッパー細胞',
            'ピット細胞',
            'ランゲルハンス細胞',
          ],
          answerImg: [liver],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(19)',
          questionImg: [],
          questionSentence: 'アザン染色で青色に染まるもの',
          choices: ['グリソン鞘', '平滑筋細胞', '内皮細胞', '吸収上皮細胞'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(20)',
          questionImg: [],
          questionSentence: '.移行上皮のある細胞',
          choices: ['被蓋細胞', '吸収上皮細胞', '線毛上皮細胞', '杯細胞'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(21)',
          questionImg: [],
          questionSentence: '線毛上皮をもつもの',
          choices: ['卵管', '肺胞', '精細管', '尿管', '食道'],
          answerImg: [],
          answer: '',
          commentary: '気管や精管は線毛を持つ',
        },
        {
          detailInfo: '(22)',
          questionImg: [],
          questionSentence: '.小葉間三つ組でないもの',
          choices: ['膵管', '胆管', '動脈', '静脈'],
          answerImg: [pancreasTissue],
          answer: '',
          commentary: '膵管（小葉間導管）は動静脈と伴行していない',
        },
        {
          detailInfo: '(23)',
          questionImg: [],
          questionSentence: '外分泌腺と内分泌腺を両方もつもの',
          choices: ['膵臓', '副腎', '唾液腺', '甲状腺'],
          answerImg: [pancreasTissue],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(24)',
          questionImg: [],
          questionSentence: '結合組織ではないもの',
          choices: ['小葉内組織', '粘膜下層', 'グリソン鞘', '粘膜固有層'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(25)',
          questionImg: [],
          questionSentence: '結腸ヒモとは何か',
          choices: ['縦走筋', '輪走筋', '粘膜筋板'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(26)',
          questionImg: [],
          questionSentence: '小腸の免疫を司るもの',
          choices: ['M細胞', 'iPS細胞', '杯細胞', '吸収上皮細胞'],
          answerImg: [intestine],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(27)',
          questionImg: [],
          questionSentence: '刷子縁が発達しているもの',
          choices: ['吸収上皮細胞', 'M細胞', '副細胞', 'パネート細胞'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(28)',
          questionImg: [],
          questionSentence: '小腸の粘膜上皮にないもの',
          choices: ['壁細胞', 'パネート細胞', '吸収上皮細胞', '内分泌細胞'],
          answerImg: [intestine],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(29)',
          questionImg: [],
          questionSentence: '小腸の膜消化を司るもの',
          choices: ['吸収上皮細胞', 'パネート細胞', '壁細胞', '内分泌細胞'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(30)',
          questionImg: [],
          questionSentence: '輪状ヒダが 1 番発達しているもの',
          choices: ['十二指腸', '結腸', '回腸', '胃', '虫垂'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(31)',
          questionImg: [],
          questionSentence: '肝臓の組織マクロファージ',
          choices: [
            'クッパー細胞',
            'ピット細胞',
            '伊東細胞',
            'メサンギウム細胞',
          ],
          answerImg: [liver],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(32)',
          questionImg: [],
          questionSentence: 'ネフロンでないもの          ',
          choices: ['集合管', '近位尿細管', '遠位尿細管', '中間尿細管'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(33)',
          questionImg: [],
          questionSentence: '上皮組織が特殊に分化して緻密斑を形成するもの',
          choices: ['遠位尿細管', '近位尿細管', '集合管', '中間尿細管'],
          answerImg: [JGA],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(34)',
          questionImg: [],
          questionSentence: '腎臓髄質に存在しないもの',
          choices: ['ボウマン嚢', '毛細血管', '中間尿細管', 'ヘンレループ'],
          answerImg: [renalTubule],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(35)',
          questionImg: [],
          questionSentence: '顕微鏡下で細胞境界が明確なもの',
          choices: ['集合管', '近位尿細管', '遠位尿細管', 'ヘンレループ'],
          answerImg: [renalTubule],
          answer: '',
          commentary:
            '集合管collecting ductの上皮は冊子縁がなく、また細胞が立法状であるため細胞境界が明確',
        },
        {
          detailInfo: '(36)',
          questionImg: [],
          questionSentence: '.血管尿関門を構成しない細胞',
          choices: [
            'ボウマン嚢壁細胞',
            'たこ足細胞',
            '基底膜',
            '糸球体内皮細胞',
          ],
          answerImg: [bloodUrineBarrier],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(37)',
          questionImg: [],
          questionSentence: '血液精巣関門をつくるもの',
          choices: ['セルトリ細胞', '精祖細胞', '精母細胞', 'ライディッヒ細胞'],
          answerImg: [testis],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(38)',
          questionImg: [],
          questionSentence: '精上皮にないもの',
          choices: ['ライディッヒ細胞', '精祖細胞', '精母細胞', 'セルトリ細胞'],
          answerImg: [testis],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(39)',
          questionImg: [],
          questionSentence: '最も大型の細胞',
          choices: ['セルトリ細胞', 'ライディッヒ細胞', '精母細胞', '精祖細胞'],
          answerImg: [testis],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(40)',
          questionImg: [],
          questionSentence: '卵胞を卵胞膜と共に形成するもの',
          choices: ['一次卵母細胞', '卵祖細胞', '2次卵母細胞', '卵胞上皮細胞'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(41)',
          questionImg: [],
          questionSentence: '子宮内膜の機能層に栄養する動脈',
          choices: ['らせん動脈', '基底動脈', '細動脈', '貫通動脈'],
          answerImg: [placenta],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(42)',
          questionImg: [],
          questionSentence: '不動毛をもつ上皮細胞があるのはどれか',
          choices: ['精巣上体管', '精細管', '精巣輸出管', '卵管'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(43)',
          questionImg: [],
          questionSentence: '母体側の組織であるもの',
          choices: ['脱落膜', '細胞性栄養膜', '絨毛膜', '合法体性栄養膜'],
          answerImg: [placenta],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(44)',
          questionImg: [],
          questionSentence: 'グラーフ卵胞にないもの',
          choices: ['線毛細胞', '卵母細胞', '透明帯', '放線冠'],
          answerImg: [follicle2],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(45)',
          questionImg: [],
          questionSentence: '胸腺に特有なもの',
          choices: [
            'ハッサル小体',
            'ランゲルハンス島',
            'ニッスル小体',
            'ライディッヒ細胞',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(46)',
          questionImg: [],
          questionSentence: '副腎髄質に存在するもの          ',
          choices: [
            'クロム親和性細胞',
            'クッパー細胞',
            'ニッスル小体',
            'ライディッヒ細胞',
          ],
          answerImg: [],
          answer: '',
          commentary:
            'クロム親和性細胞は交感神経節後ニューロンに相当する細胞である。',
        },
        {
          detailInfo: '(47)',
          questionImg: [],
          questionSentence: '副腎組織でレニンにより制御されるもの',
          choices: ['皮質球状帯', '皮質束状帯', '皮質網状帯', '髄質'],
          answerImg: [adrenalGland],
          answer: '',
          commentary:
            '皮質球状帯→電解質コルチコイド（主としてアルドステロン）、皮質束状帯→糖質コルチコイド（主としてコルチゾール）、皮質網状帯→アンドロゲン、髄質→カテコールアミン（主としてアドレナリン）',
        },
        {
          detailInfo: '(48)',
          questionImg: [],
          questionSentence: 'ムチノーゲン(粘液)を産生するのはどれか',
          choices: [
            '杯細胞',
            'クッパー細胞',
            'パネート細胞',
            'メサンギウム細胞',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(49)',
          questionImg: [],
          questionSentence: '腺の由来',
          choices: ['上皮組織', '間葉組織', '結合組織', '神経組織'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '(50)',
          questionImg: [],
          questionSentence:
            '電子顕微鏡でステロイドホルモン産生細胞を見た時に特徴的なもの',
          choices: [
            'クロマチン',
            '層板小体',
            '管状クリステ',
            'アクチンフィラメント',
          ],
          answerImg: [],
          answer: '管状クリステ',
          commentary:
            'ステロイドホルモン産生細胞の特徴：1)脂肪滴、2)管状クリステを持つミトコンドリア、3)管状滑面小胞体',
        },
        {
          detailInfo: '記述1',
          questionImg: [],
          questionSentence: '傍糸球体装置について、図示して説明しなさい。',
          // choices: ['', '', '', '', ''],
          answerImg: [JGA],
          answer:
            '1)遠位尿細管の緻密班細胞・2)輸入細動脈の平滑筋細胞・3)輸入細動脈の顆粒細胞・4)輸出細動脈の平滑筋細胞・5)両細動脈と緻密班に挟まれた糸球体外メサンギウム細胞',
          commentary:
            '血管局の近くのいくつかの細胞は、協調して血圧や糸球体ろ過を調節する働きを行うので、まとめて傍糸球体装置と呼ばれる。細胞群は多数のギャップ結合で連結されており、互いに上方を共有する。緻密班からのシグナルは輸入細動脈の平滑筋細胞や顆粒細胞に伝達され、尿細管糸球体フィードバックやレニン分泌を引き起こす。1)遠位尿細管で糸球体血管極に面する部分は細胞が小型で、核が密集して見える緻密班macula densaと呼ばれる。細胞嵌合がなく細胞がほぼ立法形となっていて、遠位尿細管内のClイオン濃度を感知し、ここを通過する濾液の流量を監視している。濾液流量（Clイオン濃度）が増加すると、輸入細動脈の平滑筋が収縮し、糸球体ろ過量が減少する。5)輸入・輸出細動脈、緻密班に囲まれた領域には、細胞成分の豊富な特殊な結合組織が挟まっており、糸球体外メサンギウムExtraglomecular mesangiumと呼ばれる。扁平な細胞で、緻密班の底に対して平行に層をなして集まっている。糸球体の入り口に蓋をしている。3)輸入細動脈の壁は糸球体への入り口近くで平滑筋細胞からレニン分泌細胞の顆粒細胞へと置き換わる。細胞内にレニンを含む顆粒を蓄えており、ゴルジ装置や粗面小胞体が発達している。上皮様細胞や傍糸球体細胞ともよばれる。',
        },
        {
          detailInfo: '記述2',
          questionImg: [],
          questionSentence: '血液胎盤関門について、図示して説明しなさい。',
          // choices: ['', '', '', '', ''],
          answerImg: [placenta],
          answer:
            'おわん型の絨毛間腔を母体血で満たして、その中に胎児の臍動静脈へと続く無数の絨毛が浮遊している。',
          commentary:
            '胎盤placentaの胎児面は羊膜に覆われ、臍帯の付着部から二本の臍動脈と一本の細静脈が絨毛膜板chorionic plateに進入する。ここから絨毛組織が樹脂状に絨毛間腔に広がり、その先端は基底脱落膜に付着する（付着絨毛という）。胎児の静脈血を運ぶ臍動脈は、絨毛膜板内で放射状に分岐して絨毛幹に入り、自由絨毛内で毛細血管となる。一方母体の子宮動脈はらせん動脈となって基底脱落膜を貫き、絨毛間腔に噴出して、絨毛周囲に達する。毎分600mlもの動脈血が胎盤に流入し、絨毛表面に接して物質交換を行った後、基底膜に開口する静脈を経て子宮静脈へ帰る。酸素や二酸化炭素、栄養素、ホルモンは胎盤膜を通過可能であり、胎児はこの膜を介してガス交換や栄養摂取を行う。',
        },
        // {
        //   detailInfo:'(1)',
        //   questionImg:[],
        //   questionSentence:'',
        //   choices:['','','','',''],
        //   answerImg:[],
        //   answer:'',
        //   commentary:'',
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
            'post-capillary venuleについて誤っているものを選べ。',
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
          answerImg: [intestine],
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
            '内腔の抗原を貪食して固有層へ抗原提示',
            '腸内免疫の主役',
            'パイエル板の表層の上皮に存在',
          ],
          answerImg: [intestine],
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
          questionSentence: '肝臓の小葉間組織について、誤っているものを選べ。',
          choices: [
            '中心静脈が通る',
            'グリソン鞘という',
            '単層立方上皮である小葉間胆管が通る',
            'アザン染色で青に染まる',
          ],
          answerImg: [hepaticLobule],
          answer: '',
          commentary:
            '中心静脈が通るのは肝小葉の中心であり、小葉間組織に通る静脈は小葉間静脈。小葉間組織はグリソン鞘とよばれ、小葉間胆管がとおり、結合組織はAzan染色で染まる。',
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
          answerImg: [follicle2],
          answer: '',
          commentary:
            '原始卵胞を取り囲むのは卵胞上皮細胞と基底膜である。卵胞膜が取り囲むようになるのは一次卵胞になってから。',
        },
        {
          detailInfo: '(33)',
          questionImg: [],
          questionSentence:
            '卵母細胞(グラーフ卵胞)について誤っているものを選べ。',
          choices: [
            '放出されるのは卵子細胞である',
            '卵胞に含まれるのは全て一次卵母細胞である',
            '放線冠と透明層はくっついている',
          ],
          answerImg: [follicle2],
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
          answerImg: [JGA],
          answer: '',
          commentary: '緻密斑は遠位尿細管の一部の上皮が分化したものである。',
        },
        {
          detailInfo: '(43)',
          questionImg: [renalTubule],
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
          detailInfo: '記述1',
          questionImg: [],
          questionSentence: '脾臓について血管構造を明らかにしつつ説明せよ。',
          answerImg: [spleen],
          answer:
            '脾動脈から流れ込んだ血液は白脾髄に入り、やがて網状構造の赤脾髄に至る。莢（さや）動脈でろ過された血液は脾索内で開放的に終わり（開放循環）、ゆっくり脾洞へと向かう。正常な赤血球は脾洞へ入り脾静脈へ向かうが、老化赤血球や異常赤血球は脾洞を通過できずマクロファージに処理される。',
          commentary:
            '脾柱動脈→中心動脈→筆毛動脈→（白脾髄と赤脾髄の辺縁帯）→莢動脈→脾索・脾洞→脾髄静脈→脾柱静脈',
        },
        {
          detailInfo: '記述2',
          questionImg: [],
          questionSentence: '血液尿関門について説明せよ。',
          answerImg: [bloodUrineBarrier],
          answer:
            '毛細血管内皮、糸球体基底膜、足細胞の足突起の３層のろ過障壁が、毛細血管とボウマン腔を隔てている。水とイオンなど小分子の透過性は極めて高いが、タンパク質など高分子に対する透過性が著しく低い。',
          commentary:
            'ろ過障壁：filtration barrier、糸球体基底膜：GBM。毛細血管は有窓性で、隔膜がない。陰性荷電分子を通しにくい性質も持つ。',
        },
      ],
    },
    // {
    //   groupTag:'2019各論',
    //   groupContents:[
    //     {detailInfo:'('},
    //   ]
    // },
    {
      groupTag: '2020各論',
      groupContents: [
        {
          detailInfo: '大問1(1)',
          questionImg: [],
          questionSentence: '洞様毛細血管について、その構造を説明しなさい。',
          answerImg: [sinusoid],
          answer:
            '洞様毛細血管は一般の毛細血管よりはるかに太く、血流は穏やかである。単層扁平上皮で内皮細胞間で広い間隙が空いている非連続型毛細血管に分類される',
          commentary:
            '（一般的な毛細血管の）直径は約8マイクロメートルほどであるが、なかには赤血球がやっと通るほどの細い毛細血管もあるし、直径30～40マイクロメートルの太い毛細血管もある。このような太い毛細血管を洞様(どうよう)毛細血管とよび、肝臓、脾臓(ひぞう)、骨髄などの毛細血管にみられる。毛細血管の壁は、単層扁平(へんぺい)上皮細胞（内皮細胞という）からできている薄い壁である。毛細血管壁には、この内皮細胞が完全に連続して配列する無窓(むそう)型（連続型）毛細血管と、内皮細胞体がきわめて薄くなり（厚さ500オングストロームほど）、その部分に細胞質を貫いて多数の小窓が形成される、いわゆる有窓型（有孔型）毛細血管とがある。このほか、内皮細胞間に広い間隙(かんげき)があいている非連続型毛細血管というのがある。この型の毛細血管は内腔(ないくう)が広く、洞様毛細血管はこの型である。',
        },
        {
          detailInfo: '大問1(2)',
          questionImg: [],
          questionSentence:
            '洞様毛細血管を持つ臓器を一つ選び、その臓器の組織構造を図示して説明しなさい。(図中には洞様毛細血管を含むこと)',
          answerImg: [hepaticLobule, liver],
          answer:
            '【解答例：肝臓】中心を中心静脈が走り、角にはグリソン鞘という小葉間胆管・肝動脈・門脈・リンパ管が通る結合組織が配置された6角柱の肝小葉が肝組織の構造単位である。中心静脈から周囲に肝細胞索が放射状に並んでいる。',
          commentary:
            '洞様毛細血管sinusoidは類洞とも呼ばれ、肝臓の他に骨髄・脾臓・内分泌器官などでもみられる',
        },
        {
          detailInfo: '大問2(1)',
          questionImg: [],
          questionSentence:
            '肺胞を構成する2種類の細胞について、その名称と細胞の特徴を答えなさい。',
          answerImg: [alveolus],
          answer:
            'Ⅰ型肺胞上位細胞（扁平肺胞上皮細胞）は、極めて薄い膜状の細胞で、細胞表面のほとんどを覆っている。細胞質のほとんどが0.05~0.2μm厚の薄い膜のようになっていて、この薄い細胞質をガスが拡散していく。　Ⅱ型肺胞上皮細胞（大肺胞上皮細胞）は、背の高い膨隆した大型の細胞で、Ⅰ型肺胞上皮細胞に挟まって散在する。表面に少量の微絨毛を持ち、表面活性物質を含んだ分泌顆粒を開口分泌によって放出する。',
          commentary:
            '細胞内小器官は1型では核の周囲のみに存在し発達していない。2型ではゴルジ装置・ミトコンドリア・粗面小胞体・ライソソームなどの他核上部にオスミウムに国選する特有の小体を含む。この招待は直径数μmの球状を呈し内部に同心円状の層板構造がみられることから層板小体とよばれる。層板小体は表面活性物質surfactantを含んだ分泌顆粒で、この物質の働きで肺胞内の表面張力が減少し、肺胞は虚脱を免れている。他、肺胞内には肺胞マクロファージが存在する。マクロファージは肺胞腔を自由に移動し、一部は間質や血管内にも存在する。胎児は28周ごろに2型肺胞上皮細胞が出現するため、この時期を過ぎれば早期産児でも理論的には肺呼吸が可能となる',
        },
        {
          detailInfo: '大問2(2)',
          questionImg: [],
          questionSentence: '血液空気関門について、図示して説明しなさい。',
          answerImg: [BloodAir],
          answer:
            '酸素や二酸化炭素が肺胞と毛細血管を行き来するためには、肺胞上皮・基底膜・毛細血管内皮の3層を通過する必要がある。この3層で構成される厚さ0.5μm程度の障壁を血液空気関門と呼び、ガス（気体）はこの関門を通過できるが水や他のほとんどの分子は通過できない。',
          commentary:
            '血液空気関門：Blood-air barrier。毛細血管内皮細胞は小孔を持たず、内皮細胞どうしはタイト結合tight junctionで繋がれている。間の1枚の基底膜は肺胞上皮の基底膜と血管内皮の基底膜が融合したものである。',
        },
        {
          detailInfo: '大問3(1)',
          questionImg: [],
          questionSentence:
            '小腸の粘膜上皮を構成する細胞を全て挙げ、それぞれについて説明しなさい。',
          answerImg: [intestine],
          answer: '吸収上皮細胞、杯細胞、M細胞、（パネート細胞）',
          commentary:
            '吸収上皮細胞absorptive epithelial cellは高さ25μmの六角形の大型円柱上皮細胞で、核は中央にある。細胞表面には微絨毛micro villiがびっしり生え、膜消化に関与する。杯細胞goblet cellは吸収上皮細胞の間に散在し、多数の粘膜顆粒を含んで膨らんでいる。核は基底側に押しやられて変形し、全体として杯のような形を呈する。この細胞は粘液を分泌し、特に大腸で発達したものがみられる。M細胞microfold cellは特殊な吸収上皮細胞で、微絨毛は少なく、microfoldというしわのような構造が形成される。細胞体は薄く伸び、数個のリンパ球を抱え込んでいる。小腸の免疫（特にIgA産生）に深く関与している。パイエル板の表層に存在する。パネート細胞paneth cellは小腸に特有の細胞である。陰窩の底に数個固まって存在する。漿液細胞でエオジンに染まる（好酸性）大型の2種類の顆粒を持つ。陰窩の底にはパネート細胞と並んでCBC細胞が分布する。CBC細胞は自己複製と全ての上皮細胞の産生を行う幹細胞である。',
        },
        {
          detailInfo: '大問3(2)',
          questionImg: [imageSample1],
          questionSentence:
            'これは小腸粘膜上皮を構成する細胞の電子顕微鏡写真である。細胞面を答え、この写真を説明しなさい。',
          answerImg: [microvilli],
          answer:
            '小腸の吸収上皮細胞の微絨毛とその表面を厚く覆う糖鎖が広く映っている。中央左部分では上皮細胞間のjunctional complexも見える。',
          // ここから要記述
          commentary:
            '結合複合体junctional complexは三種類（タイト結合tight junction・接着帯adherens junction・接着班desmosome）の構造からなり、上皮細胞間を固く接着している。糖鎖は糖衣とも呼ばれ、負の電荷を帯びているため、物質に対し選択的ろ過能を有する。',
        },
        {
          detailInfo: '再試験大問1(1)',
          questionImg: [],
          questionSentence:
            'グラーフ卵胞（卵胞膜を含む）を図示して、それぞれを名称とともに説明しなさい。 ',
          answerImg: [follicle2],
          answer:
            '第1分裂を終え、二次卵母細胞となった卵母細胞は上皮細胞との間に透明帯を形成している。その外層は放線上に並んだ顆粒膜細胞の放線冠が覆う。卵胞液によって卵胞腔の片隅に押しやられた卵母細胞を卵丘といい、最外層を内外卵胞膜が包む。排卵直前の卵胞はグラーフ細胞あるいは成熟細胞と呼ばれる。',
          commentary:
            'グラーフ卵胞Graafian follicle=成熟卵胞Mature follicle。排卵直前の卵胞は直径15～20nmに達し、その頂部は卵巣表面に膨起して透けて見えるようになる（卵胞班）。この時期下垂体から放出される大量のLHに刺激されて卵胞液が急激に増量する。',
        },
        {
          detailInfo: '再試験大問1(2)',
          questionImg: [],
          questionSentence: '排卵後の卵胞の組織変化について説明しなさい。',
          // questionSentence: '',
          answerImg: [releasedFollicle],
          answer:
            '放線冠はほどけ、卵母細胞表面には微絨毛が多くなり、分裂中期を示す赤道板は卵表面に対して垂直に位置するようになる。',
          commentary:
            '同時期に成長を開始した複数の卵胞のうち、通常1個の卵胞のみが完全に成熟し排卵に至る。他の卵胞は途中で成長を止め、退化する。これは卵胞閉鎖atresiaと呼ばれる。',
        },
        {
          detailInfo: '再試験大問2(1)',
          questionImg: [],
          questionSentence:
            '内分泌腺と外分泌腺の発生の違いを図示して説明しなさい。※（それぞれの構造の違いについても説明すること）',
          // questionSentence: '',
          answerImg: [exocrineEndocrine],
          answer:
            '両者上皮細胞が落ち込んで形成されるが、内分泌腺は上皮表面との繋がりを絶つのに対して、外分泌腺は導管を作って上皮表面との繋がりを保つ。',
          commentary:
            '外分泌腺（唾液腺など）の分泌は、上皮自由表面へ。内分泌腺（下垂体など）の分泌は、毛細血管へ行われる。',
        },
        {
          detailInfo: '再試験大問1(2)',
          questionImg: [],
          questionSentence:
            '内分泌腺と外分泌腺を各々1 つずつ選び、図示して説明しなさい。 ',
          // questionSentence: '',
          answerImg: [salivaryGland, adrenalGland],
          answer:
            '内分泌腺（副腎）：内部に血管が洞様毛細血管をつくって進入し、ホルモンなどの分泌物質が血中に流れて全身に渡る。導管はもっていない。外分泌腺（唾液腺）：腺房の分泌物質は導管で上皮表面まで運ばれる。唾液腺の場合は扁平な介在部導管と基底線条をもつ線条部導管で構成される。',
          commentary:
            '内分泌腺：下垂体・膵臓ランゲルハンス島・甲状腺・性腺など、外分泌腺：皮脂腺・胃腺・膵臓外分泌部など',
        },
        // {
        //   detailInfo:'再試験大問1(1)',
        //   questionImg:[],
        //   questionSentence:'',
        //   answerImg:[],
        //   answer:'',
        //   commentary:'',
        // }
      ],
    },
    {
      groupTag: '2021各論',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '重層扁平上皮なのは？',
          choices: ['胃', '十二指腸', '胸腺', '膵臓', '食道'],
          answerImg: [ECjunction],
          answer: '食道',
          commentary:
            '食道esophagus-胃噴門部cardiaの移行部にはE-C junctionがみられ、重層扁平上皮から単層円柱上皮へ、上皮の形態が劇的に変化する。病理学的異常が起こりやすい。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'Hassals corpusclesを持っているのは？',
          choices: ['胃', '十二指腸', '胸腺', '膵臓', '食道'],
          answerImg: [thymus],
          answer: '胸腺',
          commentary:
            '胸腺の細網細胞だけは上皮由来で、角化性の変性を起こしてハッサル小体を形成している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '外分泌腺を持たない構造はどれか',
          choices: ['胃', '十二指腸', '胸腺', '膵臓', '食道'],
          answerImg: [thymus],
          answer: '胸腺',
          commentary:
            '固有食道腺、固有胃腺、十二指腸腺（ブルンネル腺）、膵臓の大部分は膵液を産生する外分泌部が構成する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '単層立方上皮を持つのはどれか',
          choices: [
            'artery',
            'arteriole',
            'aorta',
            'post-capillary venule',
            'vein',
          ],
          answerImg: [thymus],
          answer: 'post-capillary venule',
          commentary:
            '動静脈の内皮細胞は基本単層扁平上皮であるが、毛細血管後細静脈は高内皮細静脈HEVとも呼ばれ、内皮細胞が立体的な構造となっている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'pericyteに囲まれているのは？',
          choices: [
            'artery',
            'arteriole',
            'aorta',
            'post-capillary venule',
            'vein',
          ],
          answerImg: [pericyteTEM],
          answer: 'post-capillary venule',
          commentary:
            '周皮細胞Pericyteは毛細血管と細静脈の外側から血管を取り巻く。内皮細胞と基底膜を共有する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '血管壁に弾性繊維を最も多く持つ血管は？',
          choices: [
            'artery',
            'arteriole',
            'aorta',
            'post-capillary venule',
            'vein',
          ],
          answerImg: [],
          answer: 'aorta',
          commentary:
            '弾性型動脈は中膜に弾性繊維を多く含み、弾性力に優れている。老化しやすい。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '膵臓にないのは何か',
          choices: ['介在部導管', '線条部導管', '腺房', '膵管', '腺房中心細胞'],
          answerImg: [pancreasTissue],
          answer: '線条部導管',
          commentary:
            '唾液腺などほかの外分泌腺と違い、膵臓は線条部導管や小葉間導管をもたない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '基底線条を持つのは？',
          choices: ['介在部導管', '線条部導管', '腺房', '膵管', '腺房中心細胞'],
          answerImg: [salivaryGland],
          answer: '線条部導管',
          commentary:
            '円柱上皮で、基底側に線条構造を認める。ミトコンドリアが豊富で、この部位でNaイオンが再吸収され、唾液は低張になる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '膵臓の小葉内に存在しないのは？',
          choices: ['介在部導管', '腺房', '膵管', '腺房中心細胞'],
          answerImg: [pancreasTissue],
          answer: '膵管',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次のうち、小葉間に存在するものは？',
          choices: ['介在部導管', '線条部導管', '腺房', '膵管', '腺房中心細胞'],
          answerImg: [pancreasTissue],
          answer: '膵管',
          commentary: '他動静脈も小葉間に存在する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '血液尿関門において血管から一番遠い構造は何か',
          choices: [
            '基底膜',
            'メサンギウム細胞',
            '緻密班',
            '血管内皮細胞',
            'たこ足細胞',
          ],
          answerImg: [bloodUrineBarrier],
          answer: 'たこ足細胞',
          commentary: '血管内皮細胞-基底膜-たこ足細胞の3層構造の関門',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '曲精細管の基底区画内に隔てられているものは？',
          choices: [
            'ライディッヒ細胞',
            '一次精母細胞',
            '二次精母細胞',
            '精祖細胞',
            '精子細胞',
            'セルトリ細胞',
          ],
          answerImg: [testis],
          answer: '精祖細胞',
          commentary:
            '隣接するセルトリSertoli細胞同士はtight junctionを形成し、精細管腔を区分分けして血液精巣関門を形成する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '曲精細管内に存在しないものは？',
          choices: [
            'ライディッヒ細胞',
            '一次精母細胞',
            '二次精母細胞',
            '精祖細胞',
            '精子細胞',
            'セルトリ細胞',
          ],
          answerImg: [testis],
          answer: 'ライディッヒ細胞',
          commentary:
            '間質Stromaにはホルモン産生細胞がある。ライディッヒ細胞Leydig cellはLH受容体をもち、テストステロンを分泌する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '一番大きいのは？',
          choices: [
            'ライディッヒ細胞',
            '一次精母細胞',
            '二次精母細胞',
            '精祖細胞',
            '精子細胞',
            'セルトリ細胞',
          ],
          answerImg: [testis],
          answer: 'セルトリ細胞',
          commentary: '背の高い円柱状の細胞',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ラインケの結晶はどこにあるか？',
          choices: [
            'ライディッヒ細胞',
            '一次精母細胞',
            '二次精母細胞',
            '精祖細胞',
            '精子細胞',
            'セルトリ細胞',
          ],
          answerImg: [LeydigCellTEM],
          answer: 'ライディッヒ細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'この中で自己複製しないのは？',
          choices: [
            'ライディッヒ細胞',
            '一次精母細胞',
            '二次精母細胞',
            '精祖細胞',
            '精子細胞',
            'セルトリ細胞',
          ],
          answerImg: [testis],
          answer: '精子細胞',
          commentary:
            '精祖細胞→一次精母細胞→二次精母細胞→精子細胞で、減数分裂後の精子細胞は自己複製できない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '膵臓の内分泌腺は？',
          choices: [
            'グリソン鞘',
            'ランゲルハンス島',
            'クララ細胞',
            'パイエル板',
            'ハッサル小体',
          ],
          answerImg: [pancreasTissue],
          answer: 'ランゲルハンス島',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'レニンに制御されるのは？',
          choices: [
            '副腎髄質',
            '副腎皮質球状帯',
            '副腎皮質網状帯',
            '子宮内皮細胞',
            '傍糸球体細胞',
          ],
          answerImg: [adrenalGland],
          answer: '副腎皮質球状帯',
          commentary:
            '球状帯は電解質コルチコイドを分泌し、腎臓での尿の濃縮に影響を与える。レニンによって制御される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'レニンを分泌するのは？',
          choices: [
            '副腎髄質',
            '副腎皮質球状帯',
            '副腎皮質網状帯',
            '子宮内皮細胞',
            '傍糸球体細胞',
          ],
          answerImg: [JGA],
          answer: '傍糸球体細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'アドレナリンを分泌するのは？',
          choices: [
            '副腎髄質',
            '副腎皮質球状帯',
            '副腎皮質網状帯',
            '子宮内皮細胞',
            '傍糸球体細胞',
          ],
          answerImg: [adrenalGland],
          answer: '副腎髄質',
          commentary:
            '髄質細胞はクロム親和性細胞である。アドレナリンおよびノルアドレナリンを分泌する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'リポフスチン顆粒を持つのは？',
          choices: [
            '副腎髄質',
            '副腎皮質球状帯',
            '副腎皮質網状帯',
            '子宮内皮細胞',
            '傍糸球体細胞',
          ],
          answerImg: [],
          answer: '副腎皮質網状帯',
          commentary: '副腎皮質網状帯は主としてアンドロゲンを分泌する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '胎児の血管から最も遠いのは',
          choices: [
            '合胞体性栄養膜',
            'ボーフバウエル細胞',
            'ラングハンス細胞',
            '基底膜脱落細胞',
          ],
          answerImg: [placenta],
          answer: '基底膜脱落細胞',
          commentary:
            '（胎児側）→栄養膜細胞層（ラングハンス細胞）→合胞体性栄養膜→基底脱落膜→（母体側）。ボーフバウエル細胞は絨毛内のマクロファージの一種',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '血液胎盤関門で基底膜と接するのは？',
          choices: [
            '合胞体性栄養膜',
            'ボーフバウエル細胞',
            'ラングハンス細胞',
            '基底膜脱落細胞',
          ],
          answerImg: [placentaTEM],
          answer: 'ラングハンス細胞',
          commentary:
            '胎盤関門は外側から、1)合胞体性栄養膜　2)細胞性栄養膜（ラングハンス細胞）　3)基底膜　4)絨毛疎性結合組織　5)毛細血管基底膜　6)毛細血管内皮',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '胎児由来でないものはどれ？',
          choices: [
            '合胞体性栄養膜',
            'ボーフバウエル細胞',
            'ラングハンス細胞',
            '基底膜脱落細胞',
          ],
          answerImg: [],
          answer: '基底膜脱落細胞',
          commentary: '子宮内膜由来',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ミトコンドリアを多く含むのは？',
          choices: [
            'アドレナリン分泌細胞',
            'ノルアドレナリン分泌細胞',
            'ステロイド産生細胞',
            '胃腺の壁細胞',
          ],
          answerImg: [gastricGland],
          answer: '胃腺の壁細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '高電子密度の芯をもつ分泌顆粒のある細胞は？',
          choices: [
            'アドレナリン分泌細胞',
            'ノルアドレナリン分泌細胞',
            'ステロイド産生細胞',
            '胃腺の壁細胞',
          ],
          answerImg: [medullaTEM],
          answer: 'ノルアドレナリン分泌細胞',
          commentary:
            'ノルアドレナリン分泌細胞の顆粒の方がアドレナリン分泌細胞の顆粒より電顕像の色が濃い（→電子密度が高い）',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '電顕で内分泌細胞に多いのは？',
        //   choices: [
        //     'アドレナリン分泌細胞',
        //     'ノルアドレナリン分泌細胞',
        //     'ステロイド産生細胞',
        //     '胃腺の壁細胞',
        //   ],
        //   answerImg: [],
        //   answer: 'ステロイド産生細胞',
        //   commentary: '後日追記',
        // },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'マイスネル神経叢があるのは？',
          choices: [
            '粘膜上皮',
            '粘膜固有層',
            '粘膜筋板',
            '粘膜下層',
            '輪走筋',
            '縦走筋',
          ],
          answerImg: [],
          answer: '粘膜下層',
          commentary:
            'マイスネル神経叢は粘膜下組織で血管運動などを支配。アウエルバッハ神経叢は平滑筋の内輪・外縦の間で蠕運動を支配。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '胃腺はどこでみられるか',
          choices: [
            '粘膜上皮',
            '粘膜固有層',
            '粘膜筋板',
            '粘膜下層',
            '輪走筋',
            '縦走筋',
          ],
          answerImg: [ECjunction],
          answer: '粘膜固有層',
          commentary: 'ブルンネル腺、食道腺のみ粘膜下層に位置する消化腺',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '腺の由来は？',
          choices: [
            '粘膜上皮',
            '粘膜固有層',
            '粘膜筋板',
            '粘膜下層',
            '輪走筋',
            '縦走筋',
          ],
          answerImg: [exocrineEndocrine],
          answer: '粘膜上皮',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'PAS染色陽性であるのは？',
          choices: [
            '杯細胞',
            'メサンギウム細胞',
            'パネート細胞',
            'クララ細胞',
            'ここにはない',
          ],
          answerImg: [],
          answer: 'メサンギウム細胞',
          commentary: 'PAS染色はメサンギウム基質の糖タンパクに反応する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'エオジン好染するのは？',
          choices: [
            '杯細胞',
            'メサンギウム細胞',
            'パネート細胞',
            'クララ細胞',
            'ここにはない',
          ],
          answerImg: [intestine],
          answer: 'パネート細胞',
          commentary: 'エオジン好染＝好酸性。リソソームなどが豊富',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '上皮内腺はどれか',
          choices: [
            '杯細胞',
            'メサンギウム細胞',
            'パネート細胞',
            'クララ細胞',
            'ここにはない',
          ],
          answerImg: [exocrineEndocrine],
          answer: '杯細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '出生時にないものは？',
          choices: [
            '一次卵母細胞',
            '二次卵母細胞',
            '卵子細胞',
            '卵祖細胞',
            '卵胞上皮細胞',
          ],
          answerImg: [follicle2],
          answer: '二次卵母細胞',
          commentary:
            '出生時までに卵祖細胞→一次卵母細胞。思春期以降卵巣周期ごとに一次卵母細胞→二次卵母細胞。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '排卵されるのは？',
          choices: [
            '一次卵母細胞',
            '二次卵母細胞',
            '卵子細胞',
            '卵祖細胞',
            '卵胞上皮細胞',
          ],
          answerImg: [releasedFollicle],
          answer: '二次卵母細胞',
          commentary:
            '二次卵母細胞は第二減数分裂中期で再び分裂を中止する。第二分裂が完了するのは受精後である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '卵胞内で透明帯に囲まれているのは？',
          choices: ['一次卵母細胞', '卵子細胞', '卵祖細胞', '卵胞上皮細胞'],
          answerImg: [follicle2],
          answer: '一次卵母細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '放線冠を形成するのはどれか',
          choices: [
            '一次卵母細胞',
            '二次卵母細胞',
            '卵子細胞',
            '卵祖細胞',
            '卵胞上皮細胞',
          ],
          answerImg: [follicle2],
          answer: '二次卵母細胞',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '卵胞の機能単位を二つ選べ。',
          choices: [
            '一次卵母細胞',
            '二次卵母細胞',
            '卵子細胞',
            '卵祖細胞',
            '卵胞上皮細胞',
          ],
          answerImg: [follicle2],
          answer: '卵胞上皮細胞、一次卵母細胞',
          commentary: '卵胞=卵胞上皮+一次卵母細胞',
        },
        {
          detailInfo: '記述1',
          questionImg: [],
          questionSentence:
            'SEMの肺胞の画像から各部位（毛細血管・Ⅰ型肺胞上皮細胞・Ⅱ型肺胞上皮細胞）の名称を答えよ。',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '記述2',
          questionImg: [],
          questionSentence:
            '傍糸球体装置について図示して、それを構成する細胞についてそれぞれ説明せよ',
          // choices: ['', '', '', ''],
          answerImg: [JGA],
          answer:
            '主に尿量を調節する糸球体の外部にある組織。1)輸入細動脈と2)輸出細動脈がボウマン嚢に出入りして、その境界を3)糸球体外メサンギウムがふさぎ、4)遠位尿細管の緻密班がシグナルを伝える。',
          commentary: '',
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
            '異常は3つに分類される（右半身片麻痺・右半身の感覚麻痺・舌の運動障害）。舌の左側に運動障害がみられるので延髄付近の中枢神経に異常があると推測できる（延髄より上だと舌の右側、下だと舌に障害がみられない）。Wallenberg症候群（延髄外側の障害）でみられる温痛覚障害・Horner症候群などが生じていないことから、これ以外の延髄内側の部分で障害が起こっていると推測できる。脳底動脈の傍正中枝の閉塞が原因',
        },
        {
          detailInfo: '症例2',
          questionImg: [],
          questionSentence:
            '60歳男性、心筋梗塞を起こした5日後に左側を見ると物が2重に見え、また右手を使いにくい と突然訴えるようになった。 脳神経系の検査で左外直筋麻痺が認められた。 発語が少し不明瞭 で、左側の鼻唇溝は右に比較して浅い。 左眼を強く閉じることが出来ず、 左側の眉毛を挙上 させようとしても右側ほど充分に出来なかった。 顔面の感覚全般と味覚は正常であった。 四肢の検査では右上下肢に筋力の低下が認められ、 右側のバビンスキー反射が陽性であった。 位置覚と振動覚の消失が右上下肢に認められた。',
          answerImg: [centralMotorNeuron, MillaredGubler],
          answer:
            'Millard-Gubler (ミヤールーギュブレール) 症候群、橋下部腹側症候群 外転神経麻痺と顔面神経麻痺が同時に出現するのが特徴',
          commentary:
            '橋下部左側腹側が障害され左側内側毛帯（→右上下肢）と左側外転神経・左側顔面神経が麻痺した。一方で感覚系ニューロンは背側を通過するため、正常であった。',
        },
        {
          detailInfo: '症例3',
          questionImg: [],
          questionSentence:
            'これまで健康であった50歳男性が6ヶ月前から物を飲み込みにくい、水を飲むときに気管に入って むせるというような症状が現れてきた。 約3ヶ月前から声が徐々にかすれてきて、右肩を挙上 することが困難になってきた。神経内科を受診し、診察を受けたところ以下のような所見が得られた。1) 右軟口蓋の下垂があり、 右の咽頭を刺激しても軟口蓋は挙上せず、 患者は咽頭に刺激を 加えられたかどうかも分からないと述べた。 反対側の咽頭は刺激すると挙上した。　2) 喉頭をファイバースコープで観察すると発生時の右の声帯の動きが認められなかった。　3)右の僧帽筋と胸鎖乳突筋の筋力低下、 及び筋萎縮が認められた。　どの脳神経に異常があるか (複数です) ? また、 全ての症状及び経過を一元的に解釈出来る病変とは? (これは少し難しいです)',
          answerImg: [CN11, CN10],
          answer: '右頚静脈孔（右舌咽・迷走・副神経）の異常',
          commentary:
            '右舌咽神経（咽頭・喉頭の感覚障害）、右迷走神経（咽頭・喉頭の運動障害）、右副神経（僧帽筋・胸鎖乳突筋障害）の異常がみられる。これらの脳神経はいずれも頚静脈孔を通る。グロームス腫瘍：内頚静脈の圧受容器の腫瘍が神経群を圧迫する障害の典型例。',
        },
        {
          detailInfo: '症例4',
          questionImg: [],
          questionSentence:
            '72歳女性、 朝起きると左半身が動かせない (上肢、下肢共に) ことに気付いた。家人の助けを借りてベッドから起床したが、 物が2重に見え、まぶしいと訴える。家人が患者の顔を正面から見ると、 右の上眼瞼が下がっており、 左眼は正面 を向いているのに右眼は下外側を向いた状態となっていることに気付いた。救急外来に運ばれ、診察を受けた結果、 左半身の片麻痺、 右動眼神経の麻痺 であると診断された。診断はついたが、 この患者さんは脳のどの部分に障害が起きているのだろうか?',
          answerImg: [attendance2, centralMotorNeuron],
          answer: ' 脳梗塞による中脳右半分腹側の障害',
          commentary:
            '脳梗塞により脳の一部が損傷している。右動眼神経麻痺（右動眼神経末梢）、左半身片麻痺(右中脳大脳脚）はいずれも狭い範囲（中脳右腹側）を通過している神経の障害で起こる。このとき右動眼神経麻痺によって左右どちらの目に光が入っても（対光反射）、右眼は縮瞳しない。',
        },
        {
          detailInfo: '5/30 Forms(1)',
          questionImg: [],
          questionSentence:
            '70歳の女性が突然、 右上肢、下肢の麻痺と舌の運動障害を認めた。 発症数時間後に救 急外来で診察を受けたところ、 右上下肢の筋力低下、 右半身の固有感覚及び識別性触 覚の低下が認められた。 また舌を突き出してもらうと舌は左側に偏位した。この患者の異常は何個に抽出できるか?',
          choices: ['2個', '3個', '4個', '5個'],
          answer: '3個',
          answerImg: [],
          commentary:
            '異常は3つに分類される（右半身片麻痺・右半身の感覚麻痺・舌の運動障害）。',
        },
        {
          detailInfo: '5/30 Forms(2)',
          questionImg: [],
          questionSentence:
            ' 右半身の固有感覚 (深部感覚) と識別性触覚の低下は次のどの構造の異常に起因する か?',
          answerImg: [keiroMatome],
          answer: '左内側毛帯',
          commentary: '',
          choices: [
            '右外側脊髓視床路',
            '左內側毛带',
            '右内側毛帯',
            '左三叉神経脊髄路核',
          ],
        },
        {
          detailInfo: '5/30 Forms(3)',
          questionImg: [],
          questionSentence:
            ' 舌を突き出した際に左側に舌が偏位したのはどの構造の異常か?',
          answerImg: [CN12],
          answer: '左舌下神経',
          commentary: '',
          choices: ['右舌下神経', '左疑核', '左舌下神経', '左迷走神経背側核'],
        },
        {
          detailInfo: '5/30 Forms(4)',
          questionImg: [],
          questionSentence:
            '右上下肢の麻痺 (片麻痺とも言います) 、 筋力低下は以下のどの構造の異常に起因す るか?',
          answerImg: [pyramidalTract],
          answer: '左錐体',
          commentary: '',
          choices: ['右錐体', '右下オリーブ核', '左錐体', '左疑核'],
        },
        {
          detailInfo: '5/30 Forms2(1)',
          questionImg: [],
          questionSentence: ' 右上下肢の位置覚、振動覚の消失はどの構造の障害?',
          answerImg: [keiroMatome],
          answer: '左内側毛帯？',
          commentary: '',
          choices: [
            '右楔状束核',
            '左前脊髄視床路',
            '右内側毛帯',
            '左內側毛带',
            '左內側縱束',
          ],
        },
        {
          detailInfo: '5/30 Forms2(2)',
          questionImg: [],
          questionSentence:
            ' この患者さんの複視 (物が2重に見える) 原因は次のどの構造に起因するか?',
          answerImg: [],
          answer: '左外転神経',
          commentary: '',
          choices: ['左動眼神経', '左滑車神経', '左外転神経', '右滑車神経'],
        },
        {
          detailInfo: '5/30 Forms2(3)',
          questionImg: [],
          questionSentence:
            ' この患者さんの顔面の症状は次のどの構造に由来するものか?',
          answerImg: [],
          answer: '左顔面神経',
          commentary: '',
          choices: [
            '左三叉神経',
            '右三叉神経',
            '左顔面神経',
            '右顔面神経',
            '左迷走神経',
          ],
        },
        {
          detailInfo: '5/30 Forms3(1)',
          questionImg: [],
          questionSentence:
            ' この症例で障害されている脳神経の組み合わせは以下のどれか?',
          answerImg: [],
          answer: '舌咽神経+迷走神経+副神経',
          commentary: '',
          choices: [
            ' 顔面神経+三叉神経',
            '舌咽神経+迷走神経+副神経',
            '迷走神経+副神経 +舌下神経',
            ' 顔面神経+ 前庭蝸牛神経',
          ],
        },
        {
          detailInfo: '5/30 Forms3(2)',
          questionImg: [],
          questionSentence:
            ' この症例で症状を起こす元となっている病変はどこに位置している可能性が高い?',
          answerImg: [],
          answer: '頚静脈孔',
          commentary: '',
          choices: [' 内耳道', '上眼窩裂', '卵円孔', '頸靜脈孔', '舌下神経管'],
        },
        {
          detailInfo: '5/30 Forms4(1)',
          questionImg: [],
          questionSentence:
            'この女性は脳梗塞を起こしているが、 どの部分に病変は位置しているか?',
          answerImg: [],
          choices: ['中脳腹側', '橋腹側', '中脳背側', '延髄腹側', '橋外側'],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '5/30 Forms4(2)',
          questionImg: [],
          questionSentence: 'この女性の対光反射は以下のどのパターンを呈するか?',
          answerImg: [],
          choices: [
            '右眼に光を入れると、右眼は散瞳、左目は縮瞳する',
            '右眼に光を入れても、両眼ともに散瞳したまま',
            '右眼に光を入れると右眼は縮瞳、左目は散瞳したまま',
            '右眼に光を入れると、両側で縮瞳する',
          ],
          answer: '',
          commentary:
            '右動眼神経麻痺によって左右どちらの目に光が入っても（対光反射）、右眼は縮瞳しない。',
        },
        {
          detailInfo: '6/1反転授業1',
          questionImg: [],
          questionSentence:
            '42歳の女性。左片麻痺と意識障害のため救急車で搬入された。本日、朝食を準備中に突然、意識を失い倒れたため夫が救急車を要請した。1年前に高血圧を指摘されたことがあるが特に治療は受けていなかった。意識レベルはJCSII-10。体温36.7℃。心拍数84/分、整。血圧150/88mmHg。呼吸数18/分。SpO2 100％（鼻カニューラ2L/分 酸素投与下）。左片麻痺を認める。血液所見：赤血球418万、Hb 12.8g/dL、Ht 38％、白血球7,200、血小板23万。血液生化学所見：血糖98mg/dL。CRP 0.2mg/dL。心電図に異常を認めない。胸部エックス線写真で異常を認めない。右内頸動脈造影側面像を示す。今後の治療方針として血管内治療の後に開頭手術を行うこととした。行うべき血管内治療はどれか。',
          answerImg: [nidusAVM],
          choices: [
            '流入動脈塞栓術',
            '血栓溶解療法',
            '経皮血管形成術',
            'ステント留置術',
            '脳動脈瘤塞栓術',
          ],
          answer: '',
          commentary:
            '患者は脳動静脈奇形AVMで、異常部分に流入する血流を減らす必要があった。',
        },
        {
          detailInfo: '6/1反転授業2',
          questionImg: [],
          questionSentence:
            '症例：78歳男性。主訴：意識障害、ふらつき。既往歴：特記すべきことなし。生活歴：飲酒は日本酒5合/日程度。喫煙は10本/日程度。現病歴：3日前から歩行時にふらつくことに家人が気付いた。昨日から元気がなく、問いかけに対する反応が鈍かった。今朝から流涎や尿失禁を認めたため受診した。現症：身長168cm、体重72.2kg。体温36.1℃。脈拍62/分、整。血圧132/68mmHg。問いかけには返答するが、傾眠傾向あり。口答指示にはゆっくりと反応し、記銘力や見当識の障害、軽度の左片麻痺を認めたが、脳神経、失調、感覚系の詳細な評価は困難だった。項部硬直は明らかでなく、腱反射は正常で病的反射はなし。筋強剛は明らかでなかった。一般内科所見に異常なし。検査所見：血液生化学検査では特記すべき異常なし。血清梅毒反応は陰性で、甲状腺機能も正常。初診時の頭部CT（画像1）を示す。下記のうち、この疾患について正しいのはどれか。1つ選べ。',
          answerImg: [subduralHematoma],
          choices: [
            '治療の基本は穿頭血腫洗浄術である。',
            '意識障害の改善は期待できない。',
            '適切に治療すれば、再発はまれである。',
            '頭部打撲の数日後に発症する例が多い。',
            '頭蓋骨と硬膜の間に血液が貯留する疾患である。',
          ],
          answer: '',
          commentary:
            '硬膜下血腫：手術を行えば意識障害の改善が期待できる。硬膜下血腫は再発しやすい。頭部打撲から数週間～数か月後に発症するケースが多い。硬膜とくも膜の間に血液が貯留する疾患である。',
        },
        {
          detailInfo: '6/1反転授業3(1)',
          questionImg: [],
          questionSentence: '左中心前回の障害で出る症状は以下のどれか？',
          answerImg: [],
          choices: [
            '右の運動麻痺',
            '左の運動麻痺',
            '右の感覚異常',
            '左の感覚異常',
            '平衡感覚異常',
          ],
          answer: '',
          commentary: '左中心前回：大脳中心溝の前頭葉側。一次運動野など',
        },
        {
          detailInfo: '6/1反転授業3(2)',
          questionImg: [cerebellum220601],
          questionSentence:
            '右図の部位が障害された時に最も見られる症状はどれか？',
          answerImg: [cerebellum],
          choices: ['平衡障害', '失語', '失行', '健忘', '意識障害'],
          answer: '',
          commentary:
            '前庭小脳で平衡・眼球運動の調節が行われる。大脳小脳は一部言語に関係しているが、中心的役割は大脳が果たす。',
        },
        {
          detailInfo: '6/1反転授業3(3)',
          questionImg: [],
          questionSentence: '錐体路障害で認められないものは以下のどれか？',
          answerImg: [attendance4],
          choices: [
            '不随意運動',
            'バビンスキー反射陽性',
            '腱反射亢進',
            '筋緊張異常',
          ],
          answer: '',
          commentary:
            '筋緊張は筋トーヌスとも呼ばれる。筋伸張反射（筋が伸張したときに筋の長さを一定に保とうとして筋が収縮する反射）が関与している。不随意運動はHuntington病など。',
        },
        {
          detailInfo: '6/1反転授業3(4)',
          questionImg: [],
          questionSentence:
            '脳の障害と傷害部位の組み合わせとして不適切なものはどれか？',
          answerImg: [],
          choices: [
            '運動障害ー後頭葉',
            '視野異常ー後頭葉',
            '失語ー前頭葉',
            '感覚異常ー頭頂葉',
            '平衡異常ー小脳',
          ],
          answer: '',
          commentary: '運動に関わる大脳皮質は前頭葉に存在する。',
        },
        {
          detailInfo: '6/1反転授業4(1)',
          questionImg: [spinalCord220601],
          questionSentence:
            '明るい所では問題ないが、暗くなったり、閉眼したときに急にバランスが取れなくなるのは右のどの部位に障害がある場合か？',
          answerImg: [],
          choices: [],
          answer: '1',
          commentary: '位置覚が関係している',
        },
        {
          detailInfo: '6/1反転授業4(2)',
          questionImg: [],
          questionSentence:
            '右体幹に全感覚消失している部位があり、左下肢に温痛覚麻痺がある。この患者の障害部位は？',
          answerImg: [BrownSequard],
          choices: ['脊髄右側', '脊髄左側', '延髄左外側', '延髄右外側', '視床'],
          answer: '',
          commentary:
            '障害部位の高さでは同側全感覚消失、障害部位より下では反対側に温痛覚障害がみられる',
        },
        {
          detailInfo: '6/1反転授業5(1)',
          questionImg: [],
          questionSentence:
            '41歳女性、両側の頚部、肩、両側上肢に徐々に感覚低下を認めるようになった。検査の結果、上記の部位に温度覚と痛覚の低下があるが、他の種類の感覚は正常であった。運動、筋力の異常、深部反射の異常はない。次のどの構造に障害があると考えるか？',
          answerImg: [spinalDisorder],
          choices: [
            '脊髄中心管周囲',
            '視床VPL核',
            '大脳皮質中心後回',
            '脊髄後索',
            'どれでもない',
          ],
          answer: '',
          commentary: '両側の温痛覚だけに障害がみられるのが特徴',
        },
        {
          detailInfo: '6/1反転授業5(2)',
          questionImg: [],
          questionSentence:
            '68歳高血圧症の男性、起床時に左半身の感覚が全くないことに気付いた。検査では筋力反射は共に正常で、視野も正常だった。左側の顔面、体幹、上下肢では温度覚、痛覚、及び触覚の消失があり、左前腕と下腿には関節位置覚、振動覚の消失も認めた。この患者では次のどの構造に障害があると考えられるか？',
          answerImg: [sensoryDisorder],
          choices: [
            '視床後腹側核群（VPL、VPM核）',
            '延髄外側',
            '橋腹側',
            '大脳皮質中心前回',
            '脊髄左半側',
          ],
          answer: '',
          commentary: '顔面と上下肢が同側に出ているので、視床の障害。',
        },
        {
          detailInfo: '6/1反転授業5(3)',
          questionImg: [],
          questionSentence:
            '21歳の兵士が脊柱に銃創を受けて戦地から帰国した。神経学的検査では左下肢の筋力低下があり、同時に右下半身に温度覚、痛覚の低下を認めた。振動覚、位置覚、識別性触覚は左下肢で低下していた。この患者で障害されている部位は？',
          answerImg: [spinalDisorder],
          choices: [
            '脊髄左半側',
            '脊髄右半側',
            '脊髄後索',
            '脊髄中心管周囲',
            '脊髄後角',
          ],
          answer: '',
          commentary: '',
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
