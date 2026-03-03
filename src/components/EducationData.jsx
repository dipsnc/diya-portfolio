export default function EducationData({degree, university, marks}) {
    return (
        <tr>
                            <td className="px-4 py-4 font-serif text-lg">
                              {degree}
                            </td>
                            <td className="px-4 py-4">{university}</td>
                            <td className="px-4 py-4 text-right font-medium">
                              {marks}
                            </td>
                          </tr>
    )
}