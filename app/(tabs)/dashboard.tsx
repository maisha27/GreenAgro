import { StyleSheet, ScrollView, Dimensions, Pressable } from 'react-native';
import { Text } from '../../components/ThemedText';
import { View } from '../../components/ThemedView';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/Translations';
import useVoiceGuide from '../../hooks/useVoiceGuide';

// Define valid metric IDs
type MetricId = 'temperature' | 'humidity' | 'light' | 'soil';

interface MetricCardProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  metricId: MetricId; // Update to use the union type
  value: string;
  unit: string;
  trend?: 'up' | 'down' | 'stable';
}

function MetricCard({ icon, metricId, value, unit, trend }: MetricCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { language } = useLanguage();
  const texts = language === 'bn' ? translations.bengali : translations.english;
  const { speak } = useVoiceGuide();

  const getTrendColor = () => {
    if (trend === 'up') return '#FF4444';
    if (trend === 'down') return '#00C851';
    return colors.textLight;
  };

  const getTrendIcon = (trend?: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up': return 'trending-up';
      case 'down': return 'trending-down';
      case 'stable': return 'remove';
      default: return undefined;
    }
  };

  const getTrendText = () => {
    switch (trend) {
      case 'up': return texts.dashboard.trending.up;
      case 'down': return texts.dashboard.trending.down;
      case 'stable': return texts.dashboard.trending.stable;
      default: return '';
    }
  };

  const handlePress = () => {
    const metricInfo = texts.dashboard.metrics[metricId];
    const trendText = getTrendText();
    speak(`${metricInfo.title}: ${value} ${unit}. ${trendText}`);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.card, { backgroundColor: colors.surface }]}>
        <View style={styles.cardHeader}>
          <MaterialIcons name={icon} size={24} color={colors.primary} />
          <Text style={styles.cardTitle}>{texts.dashboard.metrics[metricId].title}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{value}</Text>
          <Text style={styles.unit}>{unit}</Text>
          {trend && (
            <MaterialIcons 
              name={getTrendIcon(trend)} 
              size={20} 
              color={getTrendColor()} 
              style={styles.trendIcon}
            />
          )}
        </View>
      </View>
    </Pressable>
  );
}

export default function DashboardScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { language } = useLanguage();
  const texts = language === 'bn' ? translations.bengali : translations.english;
  const { speak } = useVoiceGuide();

  // Update to the exact time provided
  const currentDate = new Date('2025-03-02T16:33:37Z');
  const formattedDate = currentDate.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const chartData = {
    labels: texts.dashboard.timeLabels,
    datasets: [{
      data: [25, 28, 30, 28, 26, 24],
    }],
  };

  const handleHeaderPress = () => {
    speak(`${texts.common.welcome} maisha27. ${texts.common.dateTime}: ${formattedDate}`);
  };

  const handleChartPress = () => {
    speak(texts.dashboard.temperatureChart.description);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Pressable onPress={handleHeaderPress}>
        <View style={[styles.headerSection, { backgroundColor: colors.surface }]}>
          <Text style={styles.welcomeText}>
            {texts.common.welcome}, maisha27
          </Text>
          <Text style={styles.dateText}>
            {texts.common.dateTime}: {formattedDate}
          </Text>
        </View>
      </Pressable>

      <View style={[styles.section, { backgroundColor: colors.surface }]}>
        <Text style={styles.sectionHeader}>
          {texts.dashboard.sections.currentStatus}
        </Text>
        <View style={styles.gridContainer}>
          <MetricCard
            icon="thermostat"
            metricId="temperature"
            value="28"
            unit="°C"
            trend="up"
          />
          <MetricCard
            icon="water-drop"
            metricId="humidity"
            value="65"
            unit="%"
            trend="stable"
          />
          <MetricCard
            icon="wb-sunny"
            metricId="light"
            value="850"
            unit="lux"
            trend="down"
          />
          <MetricCard
            icon="grass"
            metricId="soil"
            value="45"
            unit="%"
            trend="stable"
          />
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: colors.surface }]}>
        <Text style={styles.sectionHeader}>
          {texts.dashboard.sections.temperatureChart}
        </Text>
        <Pressable onPress={handleChartPress}>
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>
              {texts.dashboard.temperatureChart.title}
            </Text>
            <LineChart
              data={chartData}
              width={Dimensions.get('window').width - 32} // Adjust width to fit screen
              height={220}
              chartConfig={{
                backgroundColor: colors.surface,
                backgroundGradientFrom: colors.surface,
                backgroundGradientTo: colors.surface,
                decimalPlaces: 1,
                color: (opacity = 1) => colors.primary,
                labelColor: (opacity = 1) => colors.text,
                propsForLabels: {
                  fontSize: 12,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: colors.primary
                },
              }}
              bezier
              style={styles.chart}
            />
          </View>
        </Pressable>
      </View>

      <View style={[styles.section, { backgroundColor: colors.surface }]}>
        <Text style={styles.sectionHeader}>
          {texts.dashboard.sections.alerts}
        </Text>
        {/* Add alerts/warnings here */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  headerSection: {
    padding: 16,
    margin: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    opacity: 0.7,
  },
  section: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 10, // Negative margin to offset card margins
  },
  card: {
    width: '110%', // Use percentage instead of fixed dimensions
    marginHorizontal: 8, // Add horizontal margin to cards
    marginBottom: 16, // Add bottom margin for spacing between rows
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
    flex: 1, // Allow text to wrap if needed
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    flexWrap: 'wrap', // Allow wrapping for long values
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  unit: {
    fontSize: 16,
    marginLeft: 4,
    opacity: 0.7,
  },
  trendIcon: {
    marginLeft: 'auto',
  },
  chartContainer: {
    borderRadius: 12,
    padding: 8,
    marginTop: 8, // Add some space above chart
    alignItems: 'center', // Center the chart
    width: '100%', // Ensure full width
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
    textAlign: 'center',
  },
  chart: {
    borderRadius: 12,
    marginHorizontal: -8, // Compensate for parent padding
  },
});