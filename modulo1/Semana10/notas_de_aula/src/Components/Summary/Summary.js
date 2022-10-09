import SummaryCard from "../SummaryCard/SummaryCard";

export default function Summary() {
    // function receberTotaisDoPlacar(arrayPublicacoes) {
    //     let totalSoft = 0; let totalBack = 0; let totalFront = 0; let totalfull = 0; let totalPlacar = 0;
    //     for (const arrayPublicar of arrayPublicacoes) {


    //         if (arrayPublicar.categoria === "SoftSkill") {
    //             totalSoft++;

    //         }
    //         else if (arrayPublicar.categoria === "FrontEnd") {
    //             totalFront++;
    //         }
    //         else if (arrayPublicar.categoria === "BackEnd") {
    //             totalBack++;
    //         }
    //         else if (arrayPublicar.categoria === "FullStack") {
    //             totalfull++;
    //         }
    //         totalPlacar++;
    //     }
    //     const resultadosDoPlacar = [totalSoft, totalFront, totalfull, totalBack, totalPlacar]

    //     criarPlacarComTotais(resultadosDoPlacar)
    // }

    // function criarPlacarComTotais(resultadosDoPlacar) {

    //     let divPlacar = document.getElementById("placar")

    //     const resultadosArray = ["SoftSkill", "FrontEnd", "FullStack", "BackEnd", "Total"]

    //     const resultados = resultadosDoPlacar.map((resultado, index) => {
    //         return {
    //             titulo: resultadosArray[index],
    //             resultado
    //         }
    //     })
    // }

    return (
        <ul className="placar" id="placar">
            <SummaryCard title='SoftSkills' count={0} />
            <SummaryCard title='FrontEnd' count={0} />
            <SummaryCard title='FullStack' count={0} />
            <SummaryCard title='BackEnd' count={0} />
            <SummaryCard title='SoftSkills' count={0} />
        </ul>
    )

}
