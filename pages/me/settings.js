import MainLayout from "../../components/hoc/MainLayout"
import ProtectedRoute from "../../store/utils/ProtectedRoute"

const settings = () => {
    return (
        <ProtectedRoute>
            <MainLayout>
                Settings
          </MainLayout>
        </ProtectedRoute>
    )
}

export default settings
